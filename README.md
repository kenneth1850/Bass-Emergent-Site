# Bass Crane Service — Website

Marketing website for Bass Crane Service, LLC (Richmond, VA). Six pages: Home, Services, Projects, Markets We Serve, About, Contact.

## Stack

- **Frontend** (`frontend/`): React 19 (Create React App + craco), React Router 7, Tailwind CSS, framer-motion, Lenis smooth scroll, lucide-react icons, sonner toasts.
- **Contact form**: a Cloudflare Pages Function at `frontend/functions/api/contact.js` emails submissions via [Resend](https://resend.com). No database, no server to maintain.

## Local development

```bash
cd frontend
yarn install        # first time only
yarn start          # http://localhost:3000
```

The contact form posts to `/api/contact`, which only exists when running under Cloudflare (production, or locally via `npx wrangler pages dev build` after `yarn build`, with secrets in `frontend/.dev.vars` — see `.dev.vars.example`). Under plain `yarn start` the form shows its error state; everything else works.

## Production build

```bash
cd frontend
yarn build          # static output in frontend/build/
```

## Deploy — Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Build settings: **Root directory** `frontend` · **Build command** `yarn build` · **Build output** `build`.
3. Settings → Variables and Secrets (Production):

| Name | Value |
|---|---|
| `RESEND_API_KEY` | (secret) from resend.com → API Keys |
| `CONTACT_TO` | `info@basscrane.com` |
| `CONTACT_FROM` | `Bass Crane Website <website@basscrane.com>` once the domain is verified in Resend; `onboarding@resend.dev` before that |
| `CONTACT_AUTOREPLY` | `true` to send customers a confirmation (optional) |

4. Resend → Domains → add `basscrane.com` → add the DNS records it gives you in Cloudflare DNS.
5. Custom domains → add `basscrane.com` and `www.basscrane.com`.

Single-page-app routing is handled automatically by Pages (unknown paths serve `index.html`, and the React app renders the 404 page).

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
- Certification / association logos in the trust band.
- Fleet / equipment page.
- Deploy and point basscrane.com at the new site.
