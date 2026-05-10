# Xtream Ranker — Redesigned Website v2.0

A luxury dark-blue & gold digital marketing agency website built with Next.js 14.

## Redesign Highlights

### Brand Identity
- **Color Palette**: Deep navy (#030711 → #081223) + luxury gold (#b8860b → #edc84a)
- **Typography**: Cormorant Garamond (display) + Outfit (body) — refined & distinctive
- **Logo**: Integrated uploaded logo throughout header and footer

### New Sections
- **AI Advantage section** — showcasing AI-powered marketing with uploaded images
- **Gold ticker marquee** — animated services strip in brand gold
- **Video hero** — background video with dark overlay and floating stats card

### Media Integration
All uploaded images are used strategically:
- Hero: background video (`hero-video.mp4`)
- Services cards: matching service images
- AI section: AI-themed images
- Why Us: growth strategy + goals images
- CTA: digital traffic analysis background

### UI/UX Improvements
- Transparent → solid header on scroll with gold border
- Floating WhatsApp panel with brand styling
- Luxury card hover effects (gold border glow, lift)
- Scroll-triggered reveal animations throughout
- Mobile-responsive grid layouts for all sections
- Gold gradient text animations on all headings

### Technical Improvements
- American English across all text and metadata
- Security headers added
- Proper image lazy loading with Next.js `Image`
- Video with `autoPlay muted loop playsInline`
- SEO metadata updated with American English
- Schema.org markup preserved and updated

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
xtream-ranker/
├── app/
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── globals.css          # Luxury navy/gold theme
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky gold header
│   │   └── Footer.tsx       # Full footer
│   ├── sections/
│   │   ├── AiAdvantage.tsx  # NEW: AI section with images
│   │   ├── CtaBanner.tsx    # CTA with bg image
│   │   ├── Hero.tsx         # Video hero
│   │   ├── ServicesOverview.tsx  # Cards with images
│   │   ├── StatsBar.tsx     # Stats + gold marquee
│   │   ├── Testimonials.tsx
│   │   └── WhyUs.tsx        # Image collage layout
│   └── ui/
│       ├── Button.tsx
│       ├── LeadForm.tsx     # Gold-styled form
│       ├── RevealOnScroll.tsx
│       └── WhatsAppButton.tsx  # Floating panel
├── lib/config.ts
├── public/                  # All media assets
└── tailwind.config.ts       # Gold/navy palette
```
