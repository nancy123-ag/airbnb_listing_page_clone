# Submission Polish + Parity Implementation Plan

> **For agentic workers:** Execute tasks in order. Skip git commits unless the user explicitly asks.

**Goal:** Clean the repo for submission, then align Photo Tour / Lightbox / hero flows with the take-home brief (desktop only).

**Architecture:** Keep existing React + Vite component tree. Data stays in `src/data/listingData.ts`. Overlays remain controlled from `App.tsx`. Prefer simple CSS animations already in `index.css`.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React

## Global Constraints

- Desktop only; no mobile redesign work
- No backend; no public GitHub push
- No lift-and-shift of reference source
- Keep functions small and readable
- Do not commit unless asked

## File map

| File | Responsibility |
|------|----------------|
| `package.json` | Drop unused deps; fix scripts |
| `airbnb_listing_page_clone.tsx` | Delete orphan monolith |
| `src/components/HeroPhotoGrid.tsx` | Hero → Photo Tour |
| `src/components/modals/PhotoTourModal.tsx` | Room-section gallery |
| `src/components/modals/LightboxModal.tsx` | Keyboard + focus trap |
| `src/data/listingData.ts` | Optional amenity lines per photo/room |
| `src/types/index.ts` | Types for room amenity captions |
| `README.md` | Local start + submission checklist |
| `AI_PROMPTS_LOG.md` | Append this session |
| `.agent/skills/ui-precision-skill.md` | Slightly stronger skill |
| `.cursor/rules/code-quality.md` | Slightly stronger rules |

---

### Task 1: Repo hygiene

**Files:**
- Delete: `airbnb_listing_page_clone.tsx`
- Modify: `package.json`

- [ ] Remove `framer-motion` from dependencies (unused)
- [ ] Change `"lint": "eslint ."` to `"preview": "vite preview"` already exists — remove broken lint OR set `"lint": "tsc --noEmit"`
- [ ] Run `npm install` to refresh lockfile
- [ ] Run `npm run build` — expect success

---

### Task 2: Hero → Photo Tour wiring

**Files:**
- Modify: `src/components/HeroPhotoGrid.tsx`
- Modify: `src/App.tsx` if needed

**Behavior:**
- Clicking any hero image calls `onOpenPhotoTour` (not Lightbox)
- Show all photos still opens Photo Tour
- Lightbox only opens from Photo Tour photo clicks

- [ ] Update HeroPhotoGrid props: drop `onOpenLightbox` or keep unused — prefer remove
- [ ] Wire all hero cells to `onOpenPhotoTour`
- [ ] Update App.tsx call site

---

### Task 3: Photo Tour room-section layout

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/listingData.ts`
- Modify: `src/components/modals/PhotoTourModal.tsx`

**UI:**
- Sticky top row of room thumbnails (one per category that has photos)
- Clicking a thumbnail scrolls to that room section
- Each section: title, amenity line (`Sofa · Air conditioning · …`), large image(s)
- Clicking an image opens Lightbox with correct global index
- Esc closes Photo Tour
- Keep Share / Save / back controls

- [ ] Add optional `amenities?: string` on Photo or a `roomMeta` map on listing
- [ ] Rewrite PhotoTourModal to room sections (no pill filter grid as primary UX)
- [ ] Add Esc key listener

---

### Task 4: Lightbox focus + a11y

**Files:**
- Modify: `src/components/modals/LightboxModal.tsx`

- [ ] Keep ←/→/Esc
- [ ] On mount: focus close button; trap Tab within dialog
- [ ] On unmount: restore previously focused element if possible
- [ ] `role="dialog"` + `aria-modal="true"`

---

### Task 5: Docs + AI configs

**Files:**
- Modify: `README.md`
- Modify: `AI_PROMPTS_LOG.md`
- Modify: `.agent/skills/ui-precision-skill.md`
- Modify: `.cursor/rules/code-quality.md`

- [ ] README: prerequisites, `npm install` / `npm run dev` / `npm run build`, desktop-only, deliverables, “what you still need from your side”
- [ ] Append prompt log entries for this session
- [ ] Keep architecture links intact

---

### Task 6: Verify

- [ ] `npm run build` passes
- [ ] Manual checklist: hero→tour→lightbox→arrows→Esc
