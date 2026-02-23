# Best Computer Tech

Marketing and service-booking site built with React + Vite.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env
```

Fill in the values in `.env`:

- `VITE_PAYPAL_CLIENT_ID`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_GOOGLE_PLACE_ID`
- `VITE_GOOGLE_PLACES_API_KEY`

3. Start development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint
- `npm run generate-sitemap` - regenerate `public/sitemap.xml`
