# 🏡 Airbnb Listing Page Clone

> Pixel-focused desktop web clone of the Airbnb property listing experience, featuring a categorized **Photo Tour**, interactive **Lightbox modal**, real-time **booking calculator**, interactive **Architecture Spec viewer**, and production-ready **system architecture design**.

[![React](https://img.shields.io/badge/React-18.3-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Reference & Scope

* **Reference Target:** [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)
* **Design Target:** Desktop optimized layout (1440px+ standard responsive layout with mobile bottom reservation bar)
* **Data Layer:** Local TypeScript mock data (`src/data/listingData.ts`)

---

## ✨ Features & Highlights

### 🖼️ Photo Gallery & Lightbox
- **Hero 5-Photo Grid:** Shimmer skeleton loading effect on image load with hover-zoom interactions and badges.
- **Categorized Photo Tour:** Full-screen room-by-room photo grid (Living Room, Bedroom, Bathrooms, Kitchen, Amenities, Exterior) triggered from any hero photo or the "Show all photos" button.
- **Interactive Lightbox Modal:** Full-screen slide viewer with keyboard shortcuts (`←` / `→` arrow keys, `Esc` to close), image counters, photo captions, focus traps, and modal scroll lock.

### 📅 Calendar & Reservation Engine
- **Dual-Month Interactive Calendar:** Synchronized dual-month datepicker supporting custom start/end date selection and month navigation (`Prev` / `Next`).
- **Real-Time Dynamic Pricing:** Calculates stay duration, nightly rates, cleaning fees, service fees, and automatic **weekly discount (10% off for 7+ nights)**.
- **Guest Stepper Dropdown:** Interactive counters for Adults, Children, Infants, and Pets with guest capacity enforcement.
- **Sticky Booking Card:** Desktop floating booking widget that remains sticky as you scroll down the listing details.
- **Reservation Confirmation:** Triggerable confirmation modal displaying complete trip summary, dates, breakdown of costs, and payment details.

### 💬 Interactive Overlays & Modals
- **Share Modal:** Social sharing overlay supporting one-click Link Copying, Email composition, and WhatsApp direct messaging.
- **Wishlist Save Modal:** Interactive modal to create or save properties into custom named wishlists.
- **All Amenities Overlay:** Categorized list of all property features (Basic, Bathroom, Kitchen, Outdoor, Safety).
- **Reviews Breakdown Modal:** Comprehensive rating modal displaying overall score (4.98 ★), rating distribution by category (Cleanliness, Accuracy, Communication, Location, Value), and search/filter interface.
- **Host Contact & Messaging:** Direct message prompt overlay allowing guests to contact the property host.

### 🏛️ Interactive Architecture Spec Viewer
- **In-App Architecture Modal:** Integrated viewer accessible directly from the header banner or footer link.
- **High-Scale System Architecture Diagram:** Interactive SVG visual representation of 7 system layers (Edge CDN, API Gateway, Microservices, Search Engine, Distributed Database, Caching, and DevOps pipeline).
- **Resilient Booking Sequence Flow:** Visual sequence model explaining Redis Redlock distributed locks to eliminate double-booking concurrency bugs.

---

## 🛠️ Tech Stack & Libraries

| Category | Technology | Usage / Note |
|---|---|---|
| **Core Framework** | [React 18](https://react.dev/) | Functional components & hooks (`useState`, `useEffect`, `useCallback`) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety for listing data, components, and events |
| **Build Tool** | [Vite 5](https://vitejs.dev/) | Fast HMR and lightweight production bundling |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS, custom colors, animations, and responsive utilities |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp, modern vector icon set |
| **Utilities** | `clsx` & `tailwind-merge` | Dynamic conditional class merging |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Development

1. **Clone or unzip the repository:**
   ```bash
   cd airbnb_listing_page_clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

```bash
# Start Vite development server with HMR
npm run dev

# Run TypeScript type check and compile for production into dist/
npm run build

# Preview production build locally
npm run preview

# Run TypeScript compiler without emitting files
npm run typecheck
```

---

## 📂 Project Structure

```
airbnb_listing_page_clone/
├── .agent/                             # Agentic AI capabilities & guidelines
│   └── skills/
│       └── ui-precision-skill.md       # Pixel-precision UI guidelines
├── .cursor/                            # Cursor IDE configuration
│   └── rules/
│       └── code-quality.md             # Code quality standards & formatting rules
├── public/                             # Static public assets
│   ├── architecture_diagram.svg        # Scalable system architecture diagram
│   └── favicon.ico
├── src/
│   ├── components/                     # Core listing components
│   │   ├── AmenitiesSection.tsx        # Highlighted amenities preview
│   │   ├── BottomMobileBar.tsx         # Mobile floating reservation bar
│   │   ├── CalendarBookingSection.tsx  # Dual-month interactive calendar
│   │   ├── Footer.tsx                  # Global page footer
│   │   ├── Header.tsx                  # Navigation header with search bar & badges
│   │   ├── HeroPhotoGrid.tsx           # 5-photo grid with shimmer loading
│   │   ├── HostSection.tsx             # Superhost profile & bio section
│   │   ├── ImageWithShimmer.tsx        # Skeleton image wrapper
│   │   ├── ListingHeader.tsx           # Title, rating summary, Share & Save actions
│   │   ├── ListingMainInfo.tsx         # Guest capacity, bedroom layout, highlights
│   │   ├── MapSection.tsx              # Interactive location map preview
│   │   ├── RecentlyViewedStrip.tsx     # LocalStorage based history strip
│   │   ├── ReviewsSection.tsx          # Reviews list & category scores
│   │   ├── SimilarListings.tsx         # Related property recommendations
│   │   ├── SleepingArrangements.tsx    # Bed layout cards per room
│   │   ├── StickyReservationCard.tsx   # Floating sticky pricing & booking widget
│   │   └── modals/                     # Overlay dialogs & full-screen views
│   │       ├── AllReviewsModal.tsx     # Full reviews viewer
│   │       ├── AmenitiesModal.tsx      # All amenities detailed overlay
│   │       ├── ArchitectureModal.tsx   # In-app System Architecture spec viewer
│   │       ├── HostContactModal.tsx    # Host direct messaging dialog
│   │       ├── LightboxModal.tsx       # Fullscreen carousel lightbox
│   │       ├── PhotoTourModal.tsx      # Categorized room photo gallery
│   │       ├── ReserveConfirmModal.tsx # Booking confirmation overlay
│   │       ├── SaveWishlistModal.tsx   # Save listing to wishlist dialog
│   │       └── ShareModal.tsx          # Copy link & social share modal
│   ├── data/
│   │   └── listingData.ts              # Single source of truth for mock property data
│   ├── types/
│   │   └── listing.ts                  # Shared TypeScript interfaces & types
│   ├── App.tsx                         # Main app state controller & overlay router
│   ├── index.css                       # Base Tailwind imports & scroll lock utilities
│   └── main.tsx                        # Application entry point
├── AI_PROMPTS_LOG.md                   # Chronological prompt sequence log
├── ARCHITECTURE.md                     # Technical design document for production scale
├── index.html                          # Main HTML document template
├── package.json                        # Scripts and project dependencies
├── tailwind.config.js                  # Custom Tailwind configuration
└── vite.config.ts                      # Vite configuration & server setup
```

---

## 🏗️ System Architecture Overview

The project includes a production architecture blueprint (`ARCHITECTURE.md`) designed to scale to **millions of concurrent users** and **hundreds of thousands of active listings**.

Key highlights of the backend design:
1. **Global Edge CDN (Cloudflare/Fastly):** Edge caching for static listing pages (ISR/SSR) and AVIF/WebP image optimization.
2. **Microservice Backend & API Gateway:** Auth service, Listing management, Booking engine, and Real-Time Messaging.
3. **Geo-Spatial Search (Elasticsearch):** Instant bounding-box & radius property search filtered by availability dates.
4. **Distributed Concurrency Lock (Redis Redlock):** Prevents double-booking during high-traffic flash sales or peak seasons.
5. **Data Layer:** PostgreSQL (primary + read replicas) for relational consistency, S3/R2 for media storage.

> Read the full specification in [`ARCHITECTURE.md`](./ARCHITECTURE.md) or inspect the diagram in [`public/architecture_diagram.svg`](./public/architecture_diagram.svg).

---

## 🤖 AI-Assisted Development Workflow

This codebase was developed following a structured, multi-phase AI prompt sequence. 

- **Prompt Log:** Detailed history of prompts available in [`AI_PROMPTS_LOG.md`](./AI_PROMPTS_LOG.md).
- **Skill Definitions:** UI precision guidelines codified in `.agent/skills/ui-precision-skill.md`.
- **Code Rules:** Strict formatting and design standards codified in `.cursor/rules/code-quality.md`.

---

## 📤 Submission Checklist

When preparing a submission package:

- [x] Full source code (`src/`, `public/`, configuration files)
- [x] Production architecture SVG diagram (`public/architecture_diagram.svg`)
- [x] Architecture technical document (`ARCHITECTURE.md`)
- [x] AI Development Prompt Log (`AI_PROMPTS_LOG.md`)
- [x] AI agent & rule configs (`.agent/`, `.cursor/`)
- [x] Clean README documentation (`README.md`)

### Packaging Command (Windows PowerShell)

```powershell
Compress-Archive -Path src,public,.agent,.cursor,*.md,*.json,*.ts,*.js,*.html -DestinationPath ../airbnb_listing_clone_submission.zip -Force
```

> **Note:** Exclude `node_modules/` and `dist/` from archive submissions. Keep the repository private as requested.

---

## 📄 License

This project is created for educational and evaluation purposes. All design rights belong to Airbnb, Inc.

