# PRD — Bass Crane Service, LLC Marketing Website

## Original Problem
Professional, modern, multi-page marketing website for Bass Crane Service, LLC (family-owned crane & truck rental, Richmond VA, since 1913). Structure modeled on a competitor site but using ONLY Bass Crane content/branding. Modern industrial aesthetic, real logo used as-is, all photography as labeled GRAY placeholders (no stock), SEO-friendly, fully responsive.

## Art Direction
Industrial Brutalism — deep black (#050505), Signal Red accent (#E3000F), sharp/rounded-none corners, blueprint grid, grain overlay. Fonts: Cabinet Grotesk (display) + IBM Plex Sans (body) + IBM Plex Mono (labels). Motion: framer-motion (masked reveals, scroll reveals, parallax) + Lenis smooth scroll + editorial marquees.

## Architecture
- Frontend: React (CRA/craco) + React Router (6 pages) + framer-motion + lenis + Tailwind + shadcn (sonner toasts).
  - Layout (Lenis + Header + Footer), Header (utility bar + sticky nav + full-screen mobile menu), Footer, PageHero, Reveal/MaskedLines, Placeholder (blueprint-framed gray labeled blocks), Marquee, CTABand.
  - Pages: Home, Services, Projects, Markets, About, Contact. Content in `src/data/site.js`.
- Backend: FastAPI + MongoDB. `POST /api/contact` (stores submission), `GET /api/contact` (list). Model uses uuid ids + ISO datetimes.

## User Choices
- Contact form: store to DB only (no email yet; user will supply email later).
- Display email: info@basscrane.com (placeholder).
- Google Map: standard iframe embed (no key).
- Design: fully delegated to design agent.

## Implemented (2026-08-04)
- All 6 pages built with per-page SEO titles/meta, kinetic masked-reveal hero, service grid, CCO trust band, projects gallery, markets grid, About story w/ marquee + values, Contact split + form + map.
- Contact form verified end-to-end (UI submit -> DB persisted -> success toast).
- Logo used exactly as-is (basscrane.com logo) in header + footer (white container). All photos are labeled gray placeholders.
- Verified: home/services/contact/about desktop, mobile menu, backend curl.

## Placeholders / TODO markers in code
- White footer logo variant to be supplied.
- Confirm company email (currently info@basscrane.com).
- Social media links (footer icons are '#').
- Real project photos + case studies.
- Wire contact form submissions to company email once confirmed.

## Backlog (P1/P2)
- P1: Email notifications on contact submit (Resend) once email confirmed.
- P1: Admin view for contact submissions.
- P2: Replace placeholders with real photography; add project case-study detail pages.
- P2: Blog/news, testimonials, equipment spec sheet/fleet page.
