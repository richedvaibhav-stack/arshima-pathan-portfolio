
## Arshima Pathan — Personal Portfolio

A polished, single-page portfolio with placeholder content ready to be filled in later. Premium feel: soft palette with elegant gradient accents, glassmorphism, generous spacing, and tasteful motion.

### Design system
- **Palette**: warm off-white background, deep ink foreground, soft rose + lavender + peach gradient accents (used sparingly for highlights, blurred blobs, and CTA glow). Refined and feminine but professional — no neon.
- **Typography**: serif display for headings (Playfair Display) + clean sans for body (Inter), paired for a premium editorial look.
- **Surfaces**: rounded-2xl cards, subtle borders, soft shadows, frosted-glass navbar, ambient gradient blobs in section backgrounds.
- **Motion**: fade-in-on-scroll, hover lift on cards, subtle gradient shimmer on hero, smooth-scroll between sections, animated underline on nav links.

### Structure (single page, sticky navbar with smooth scroll)
1. **Sticky Navbar** — name/monogram left, links right (About · Skills · Achievements · Projects · Contact), glass background, animated underline on hover, mobile hamburger sheet.
2. **Hero** — two-column on desktop: left = name "Arshima Pathan" in large serif with a gradient-accented word, headline "Modern Portfolio Website", subtitle "Aspiring professional | Creative builder | Future achiever", two CTAs ("View More" → projects, "Contact" → contact). Right = circular avatar placeholder with soft gradient ring, floating decorative dots, subtle parallax blob behind.
3. **About** — elegant intro paragraph (placeholder) on the left, a highlighted pull-quote card on the right with a gradient border and quotation mark accent.
4. **Skills** — grid of placeholder skill chips/cards (empty labels like "Skill 01", "Skill 02"…), grouped under 2–3 category headers, glassy cards with hover glow.
5. **Achievements** — vertical timeline on desktop (alternating left/right), stacked on mobile. 3–4 placeholder milestones with date chip, title, short description.
6. **Projects** — 3 placeholder project cards in a responsive grid: gradient-tinted preview area, title, short description, tech tag pills, "View Project" button.
7. **Contact** — split layout: left = contact card with email / LinkedIn / GitHub placeholder rows (icon + label), right = simple form (name, email, message, submit). Form is UI-only.
8. **Footer** — monogram, short tagline, social icons, copyright.

### Technical approach
- Replace `src/routes/index.tsx` placeholder with the full portfolio composed from small section components in `src/components/portfolio/` (Navbar, Hero, About, Skills, Achievements, Projects, Contact, Footer).
- Add a tiny `useReveal` hook using IntersectionObserver to trigger fade/translate-in animations as sections enter the viewport.
- Smooth scroll via `scroll-behavior: smooth` on `html` plus anchor IDs on each section.
- Update `src/styles.css` with the refined palette (warm light theme), serif display font import, and a few extra keyframes (slow gradient drift, soft float).
- Update root route `head()` with proper title, description, and OG tags for Arshima Pathan's portfolio.
- Lucide icons for nav, socials, and contact rows. Fully responsive (mobile hamburger, single-column stacks, tuned spacing).

### Out of scope (intentionally placeholders)
- Real skills, achievements, project details, photo, and contact links — clearly marked so they're easy to swap in later.
