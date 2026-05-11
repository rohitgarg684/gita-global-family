@AGENTS.md

# Gita Global Family — Project Reference

## Overview

Port of [gitaglobalfamily.org](https://gitaglobalfamily.org/) from Framer to Next.js 16, hosted on Firebase App Hosting (GCP). The site promotes the Bhagavad Gita's teachings through education (Gurukul), publications, and community building.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript, `output: "standalone"`)
- **Styling**: Tailwind CSS v4 with custom theme colors in `src/app/globals.css`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: DM Sans (Google Fonts)
- **Hosting**: Firebase App Hosting (auto-deploys from GitHub `main` branch)
- **Storage**: GCS bucket `gs://gita-gloval-family.firebasestorage.app`

## Key Commands

```bash
npm run dev       # Local dev server
npm run build     # Production build (standalone)
npm run lint      # ESLint
npm run deploy    # Build + firebase deploy
```

## GCP / Firebase Configuration

| Item | Value |
|------|-------|
| Firebase project | `gita-global-family` |
| GCS bucket | `gs://gita-gloval-family.firebasestorage.app` |
| Service account key | `./service-account-key.json` (gitignored, sourced from `/Users/rohitgarg/Downloads/gita-gloval-family-dfafcb322e13.json`) |
| Service account email | `cussor@gita-gloval-family.iam.gserviceaccount.com` |
| App Hosting config | `apphosting.yaml` (Node 22, 512MB) |
| Firebase Hosting config | `firebase.json` (serves `out/` directory) |
| Firebase project alias | `.firebaserc` → `default: gita-global-family` |
| Google Analytics | `G-CYVZ64QW4T` (in `src/app/layout.tsx`) |

## Project Structure

```
├── public/
│   ├── images/              # All site images (hero, gallery, book covers, icons)
│   ├── apple-touch-icon.png # PWA icons
│   ├── icon-192.png
│   ├── icon-512.png
│   └── manifest.json        # Web manifest for PWA
├── scripts/
│   └── upload-to-gcs.py     # Upload assets to GCS bucket (configurable)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout (Header, Footer, fonts, GA, SEO metadata)
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Tailwind config + custom color variables
│   │   ├── about/            # About page
│   │   ├── bhagavad-gita/    # Scripture reader (18 chapters, 687 verses)
│   │   │   ├── page.tsx              # Chapter listing
│   │   │   ├── [chapter]/page.tsx    # Chapter view (SSG)
│   │   │   └── [chapter]/[verse]/    # Individual verse view (SSG)
│   │   ├── blog/             # Blog listing + [slug] detail pages
│   │   ├── brahmabodhi/      # Founder's page
│   │   ├── contact/          # Contact form
│   │   ├── gallery/          # Photo gallery
│   │   ├── gita-gurukul/     # Gurukul education initiative
│   │   ├── gita-publications/# Book store (links to Razorpay)
│   │   ├── join-us/          # Membership + donations
│   │   ├── networking/       # Community connections
│   │   └── terms-and-conditions/
│   ├── components/
│   │   ├── Header.tsx        # Responsive nav with mobile menu + dropdown
│   │   ├── Footer.tsx        # Links, contact, social media
│   │   ├── HeroCarousel.tsx  # Auto-scrolling image strip (hover-pause, arrows)
│   │   ├── BlogCard.tsx      # Reusable blog post card
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── DonationButton.tsx# Razorpay donation CTA
│   │   ├── FAQAccordion.tsx  # Expandable FAQ component
│   │   ├── GitaVerseCard.tsx # Verse summary card
│   │   └── SectionHeading.tsx# Reusable section title with animation
│   ├── data/
│   │   └── gita/             # Bhagavad Gita JSON data (18 chapter files + index)
│   └── lib/
│       └── gita-data.ts      # TypeScript utilities for loading Gita verse data
├── apphosting.yaml           # Firebase App Hosting runtime config
├── firebase.json             # Firebase Hosting config
├── next.config.ts            # Next.js config (standalone output, unoptimized images)
└── service-account-key.json  # GCP credentials (GITIGNORED — never commit)
```

## External Services & Links

| Service | URL / ID |
|---------|----------|
| Razorpay Store (Publications) | https://pages.razorpay.com/stores/st_QvF1VOCPbywKFo |
| Razorpay Donations | https://rzp.io/rzp/TsaLFcd |
| YouTube (Hindi) | https://www.youtube.com/@BrahmBodhi_HindiOfficial |
| YouTube (English) | https://www.youtube.com/@BrahmBodhi_EnglishOfficial |
| Contact email | namaste@gitaglobalfamily.org |
| Phone | +91 886-505-2915 |

## GCS Asset Upload

Upload all `public/` assets to the GCS bucket with categorized folders:

```bash
python3 scripts/upload-to-gcs.py \
  --bucket gita-gloval-family.firebasestorage.app \
  --prefix assets \
  --source public \
  --credentials service-account-key.json
```

The script auto-categorizes files into `assets/images/`, `assets/icons/`, `assets/audio/`, `assets/documents/`, `assets/other/`. It skips files that already exist in the bucket.

The bucket name is configurable via `--bucket` flag or `GCS_BUCKET` in `.env.local`.

## Bhagavad Gita Data

- Source: Excel file converted to JSON via Python script
- 18 chapter files: `src/data/gita/chapter-01.json` through `chapter-18.json`
- Chapter index: `src/data/gita/chapters-index.json`
- Data access utilities: `src/lib/gita-data.ts` (interfaces: `Verse`, `ChapterData`, `ChapterSummary`)
- All 687 verse pages are statically generated via `generateStaticParams`

## Design System

Custom color palette defined in `src/app/globals.css` as CSS variables:
- **Saffron** (primary): `#E8732A` — buttons, links, CTAs
- **Cream** (background): `#FFF8F0` — section backgrounds
- **Dark Brown**: `#3D1C00` — headings, text
- **Maroon**: `#5C1A1B` — accent sections
- **Gold**: `#C9A84C` — decorative highlights

## Important Notes

- `service-account-key.json` is **gitignored** — never commit credentials
- The site uses `output: "standalone"` for Firebase App Hosting (not static export)
- Blog content is currently hardcoded in the page files (no CMS)
- All donation links point to Razorpay (`rzp.io`)
- The original Framer site is at https://gitaglobalfamily.org/ — use as visual reference
- Images are `unoptimized: true` since Firebase App Hosting handles them
