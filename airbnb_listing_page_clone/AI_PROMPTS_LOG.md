# AI-Assisted Development Prompt Sequence & Log

This log documents the structured AI prompt sequence used during development of the Airbnb Listing Page clone and architecture deliverables.

---

### Prompt 1: Initial Vision & Project Blueprinting
> "Analyze the target Airbnb listing page reference (`https://airbnb-clone-umber-two.vercel.app`). Break down layout sections, colour palette, interactive features (sticky booking widget, date picker, reviews, guest counter), and overlay views (Photo Tour, Lightbox with keyboard navigation). Outline a modular React TypeScript + Tailwind architecture."

### Prompt 2: Data Modeling & Asset Strategy
> "Create a TypeScript data model (`ListingData`) for the property: host details, categorized photos, amenities, reviews with category scores, nearby landmarks, and INR pricing. Keep assets editable in one data file."

### Prompt 3: Component Implementation & Visual Precision
> "Implement listing page sections: Header, ListingHeader (Share/Save), HeroPhotoGrid with Show all photos, ListingMainInfo, Amenities, CalendarBookingSection, StickyReservationCard, Reviews, Map, Host, SimilarListings, Footer."

### Prompt 4: Overlay Views (Photo Tour & Lightbox)
> "Implement PhotoTourModal (full-screen gallery from Show all photos / hero) and LightboxModal (prev/next, ←/→/Esc, captions, counter)."

### Prompt 5: System Architecture & Submission Bundling
> "Design a high-level vacation-rental marketplace architecture (CDN/edge, API gateway, Redis booking locks, Elasticsearch geo search, PostgreSQL, Kubernetes). Deliver SVG diagram, ARCHITECTURE.md, and AI skill/rule configs."

### Prompt 8: Architecture diagrams for submission
> "Create polished, submission-ready SVG architecture diagrams for a production vacation-rental marketplace: (1) 7-layer system architecture covering clients, edge/CDN, API gateway, microservices, search, data, and ops; (2) booking/Redlock flow to prevent double-booking. Embed both in Architecture Spec modal and ARCHITECTURE.md."
