# Tucha's Auto Parts — Landing Page

Professional landing page for Tucha's Autoparts & Outsourcing.
Built with React, ready for Vercel deployment.

## Tech Stack
- React 18
- CSS Modules (component-level CSS)
- Google Fonts: Bebas Neue, DM Serif Display, DM Sans

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Output is in the `build/` folder.

## SEO + Analytics Setup

### Search Console / Bing Verification

Update tokens in `public/index.html`:

- `google-site-verification`
- `msvalidate.01`

### Google Tag Manager

Update `GTM-XXXXX` in `public/index.html` with your real container ID.

### Event Tracking Implemented

The app currently sends these events to `dataLayer`/`gtag`:

- `page_view`
- `whatsapp_click`
- `product_click`

Files:

- `src/utils/analytics.js`
- `src/utils/whatsapp.js`
- `src/components/Parts.jsx`

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Framework: **Create React App** (auto-detected)
5. Click Deploy

The `vercel.json` in the root handles all configuration automatically.

## Customisation

- **Phone numbers**: Update in `src/components/Contact.jsx` and WhatsApp links in `Hero.jsx`, `App.js`, and `Contact.jsx`
- **Brand colours**: Edit CSS variables in `src/index.css` (`:root` block)
- **Fonts**: Change Google Fonts import in `public/index.html`
- **Parts categories**: Edit the `categories` array in `src/components/Parts.jsx`
