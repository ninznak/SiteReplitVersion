# CreativeSphere

A Next.js 15 portfolio and community platform for 3D modeling and AI-generated content. Features a shop, forum, news section, and portfolio pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 3
- **Charts**: Recharts
- **Icons**: Heroicons

## Architecture

- `src/app/` — App Router pages (homepage, about, forum, news, portfolio, shop, sign-up-login)
- `src/components/` — Shared UI components
- `src/styles/` — Global Tailwind CSS
- `public/` — Static assets

## Running the App

The app runs via the "Start application" workflow using:
```
npm run dev
```
This starts Next.js on port 5000, bound to `0.0.0.0` for Replit compatibility.

## Environment Variables

The following secrets are required for full functionality (set via Replit Secrets):

| Key | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `OPENAI_API_KEY` | OpenAI API access |
| `GEMINI_API_KEY` | Google Gemini API |
| `ANTHROPIC_API_KEY` | Anthropic Claude API |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense |
| `PERPLEXITY_API_KEY` | Perplexity API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe payments |

The `.env` file contains placeholder values — replace them with real keys via Replit Secrets for production use.

## Replit Migration Notes

- Port changed from 4028 to 5000 with `-H 0.0.0.0` for Replit proxy compatibility
- `NEXT_PUBLIC_SITE_URL` set dynamically to the Replit dev domain
