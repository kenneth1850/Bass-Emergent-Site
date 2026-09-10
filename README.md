# Bass Crane Service — Website

Marketing website for Bass Crane Service, LLC (Richmond, VA). Six pages: Home, Services, Projects, Markets We Serve, About, Contact.

## Stack

- **Frontend** (`frontend/`): React 19 (Create React App + craco), React Router 7, Tailwind CSS, framer-motion, Lenis smooth scroll, lucide-react icons, sonner toasts.
- **Backend** (`backend/`): FastAPI + MongoDB — currently only stores contact-form submissions. Slated to be replaced by a hosted form service (see Roadmap).

## Local development

```bash
cd frontend
yarn install        # first time only
yarn start          # http://localhost:3000
```

Copy `frontend/.env.example` to `frontend/.env` and adjust if needed.

## Production build

```bash
cd frontend
yarn build          # static output in frontend/build/
```

The site is a single-page app: the host must rewrite all paths to `/index.html` (Netlify, Vercel and Cloudflare Pages all support this with a one-line config).

## Where things live

| What | Where |
|---|---|
| All company facts, nav, services, markets copy | `frontend/src/data/site.js` |
| Pages | `frontend/src/pages/*.jsx` |
| Header, footer, hero, reveal animations, placeholders | `frontend/src/components/` |
| Logo, favicons, social-share image, robots, sitemap | `frontend/public/` |
| Global styles, fonts, animation keyframes | `frontend/src/index.css` |

## Roadmap

- Replace gray placeholder blocks with real photography.
- Replace the Mongo backend with a hosted form service that emails submissions.
- Certification / association logos in the trust band.
- Fleet / equipment page.
- Deploy and point basscrane.com at the new site.
