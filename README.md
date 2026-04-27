# ZOLA Property Management — Website

Modern Next.js (App Router) website for ZOLA Property Management. Conversion-optimized landing page + supporting pages, with lead capture wired into Vercel Postgres + Resend.

## Stack
- Next.js 16 (App Router, RSC) + TypeScript
- Tailwind CSS v4 (CSS-first config in `globals.css`)
- React Hook Form + Zod
- Drizzle ORM + Vercel Postgres
- Resend for transactional email
- lucide-react icons

## Local development

```bash
cp .env.local.example .env.local
# fill in POSTGRES_URL, RESEND_API_KEY, LEAD_NOTIFY_EMAIL
npm install
npm run dev
```

Open http://localhost:3000.

## Required environment variables

| Var | Purpose |
| --- | --- |
| `POSTGRES_URL` | Pooled Vercel Postgres connection string (auto-injected when DB is connected in the Vercel dashboard). |
| `POSTGRES_URL_NON_POOLING` | Non-pooled connection (used by `drizzle-kit`). |
| `RESEND_API_KEY` | Resend API key for sending lead notification emails. |
| `RESEND_FROM_EMAIL` | Verified sending identity, e.g. `"ZOLA Leads <leads@zolapropertymanagement.com>"`. |
| `LEAD_NOTIFY_EMAIL` | Inbox to receive new lead notifications. Defaults to `info@zolapropertymanagement.com`. |

If `POSTGRES_URL` is missing the API still returns 200 (and the email still sends) — the lead just isn't persisted. This makes the form usable even before the DB is connected.

## Database setup (one-time)

1. In the Vercel dashboard for the project: **Storage → Create Database → Postgres**. Connect it to the project. Vercel will auto-inject `POSTGRES_*` env vars.
2. Pull env vars locally: `vercel env pull .env.local`
3. Generate and apply the schema:

   ```bash
   npx drizzle-kit generate
   npx drizzle-kit push
   ```

This creates the `leads` table.

## Resend setup (one-time)

1. Create a Resend account at https://resend.com.
2. Add and verify the `zolapropertymanagement.com` domain (DNS records: SPF, DKIM, optional DMARC).
3. Create an API key, set it in `RESEND_API_KEY`.
4. Set `RESEND_FROM_EMAIL` to a verified sender on that domain.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new.
3. Connect the Postgres database (above).
4. Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_NOTIFY_EMAIL` env vars.
5. Add the production domain (`www.zolapropertymanagement.com`) in **Settings → Domains**.
6. Deploy. Vercel Analytics + Speed Insights can be enabled in the dashboard.

## Project layout

```
src/
  app/
    api/leads/route.ts   # POST endpoint — Zod, honeypot, Postgres insert, Resend send
    layout.tsx           # Root layout, fonts, global metadata, JSON-LD
    page.tsx             # Homepage (hero + 14 sections)
    how-it-works, services, areas-we-serve, reviews, recently-leased,
    about, faq, contact, privacy, terms
    sitemap.ts, robots.ts
  components/
    Header.tsx, Footer.tsx, Logo.tsx, PageHeader.tsx
    forms/StrategyCallForm.tsx, RentEstimateForm.tsx,
          ContactForm.tsx, ReserveSpotForm.tsx
  db/
    schema.ts            # Drizzle pgTable definitions
    client.ts            # Drizzle client
  lib/
    site.ts              # NAP, NAV, FAQs, testimonials — single source of truth
    leads.ts             # Zod schema for the lead API
    useLeadSubmit.ts     # Shared client hook for form submissions
    utils.ts             # cn() helper
public/
  llms.txt               # AI / LLM crawler summary
```

## SEO / AI visibility

- Per-page `metadata` (title template, descriptions, canonicals, OG, Twitter)
- JSON-LD: `LocalBusiness` (root), `FAQPage`, `Service`, `Review` / `AggregateRating`
- `sitemap.ts` and `robots.ts` (Next.js metadata API)
- `public/llms.txt` for LLM-based search engines (Perplexity, ChatGPT, Claude, Gemini)
- Server-rendered marketing pages (RSC) for fast Core Web Vitals
- Semantic headings, descriptive link text, internal linking between Services / Areas / Contact

## Image assets

The current build uses CSS-gradient placeholders for property type / leased / hero imagery. Drop real images into `public/images/` and reference them from `src/lib/site.ts` (`PROPERTY_TYPES`, `RECENTLY_LEASED`) using `next/image` to swap.
