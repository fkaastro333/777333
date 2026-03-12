# PRD — Escola Cruzeiro Vila Velha Website

## Project Overview
Premium marketing website for ESCOLA CRUZEIRO VILA VELHA — a kids football academy in Vila Velha, ES, Brazil.

**Goal:** High-conversion landing page to attract parents to schedule free trial sessions.

**Date Built:** February 2026

---

## Client Information
- **Academy Name:** Escola Cruzeiro Vila Velha
- **Address:** Alvorada, Vila Velha – ES, CEP 29117-270
- **WhatsApp/Phone:** (27) 99203-4728
- **Email:** vilavelha@escolacruzeiro.com.br
- **Instagram:** @escola.cruzeiro.vilavelha
- **Coach:** Lucas Willian (@prof.lucaswill)

---

## Architecture
- **Frontend:** React (CRA + Craco) + TailwindCSS + Lucide React icons
- **Backend:** FastAPI (Python)
- **Database:** MongoDB (motor async)
- **Fonts:** Montserrat (headings) + Poppins (body) via Google Fonts
- **Colors:** #003399 (Cruzeiro Royal Blue), #1a3080 (Midnight Navy), #F1BE10 (Star Gold)

---

## Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Main landing page with all sections |
| `/obrigado` | ThankYouPage | Thank you page after form submission |
| `/turmas-lotadas` | ClassesFullPage | Classes full → waitlist via WhatsApp |

---

## Sections Implemented (HomePage)
1. **Navbar** — Transparent→solid sticky, mobile hamburger menu
2. **HeroSection** — Full-screen background, "TREINA. DESENVOLVE. VENCE.", 2 CTAs + stats
3. **TrustSection** — 3 trust cards: Treinadores Profissionais, Ambiente Seguro, Metodologia Comprovada
4. **AboutSection** — 2-column: image + academy philosophy + values checklist
5. **ProgramsSection** — 3 program cards: Iniciante (5-7), Desenvolvimento (8-10), Avançado (11-14)
6. **CoachesSection** — Lucas Willian card with Instagram link
7. **TestimonialsSection** — Auto-rotating slider (4 testimonials) with prev/next/dots
8. **FacilitiesSection** — Field image + 8 facility highlights
9. **CTASection** — Large conversion section "Agende Aula Experimental Grátis"
10. **ContactSection** — Form (parent name, child age, phone, message) + contact info
11. **Footer** — Dark footer with logo, links, social icons, slogan "JOGUE. EVOLUA. REPITA."
12. **WhatsAppButton** — Floating button (fixed)
13. **MobileCTA** — Sticky bottom bar on mobile

---

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/ | Health check |
| POST | /api/contact | Submit contact form → saves to MongoDB |
| GET | /api/contact | Get all contact submissions |
| POST | /api/status | Legacy status check |
| GET | /api/status | Legacy status list |

---

## What's Been Implemented ✅
- [Feb 2026] Full website built from scratch — all sections, pages, components
- [Feb 2026] Backend contact form API with MongoDB storage
- [Feb 2026] Scroll reveal animations (IntersectionObserver)
- [Feb 2026] Mobile-first responsive design
- [Feb 2026] Floating WhatsApp button + mobile sticky CTA
- [Feb 2026] Testing: Backend 100% (6/6), Frontend 95%

---

## Prioritized Backlog

### P0 (Critical — Must Have)
- ✅ All sections implemented
- ✅ Contact form functional

### P1 (High Priority — Next Phase)
- [ ] Admin dashboard to view contact submissions
- [ ] Google Maps embed in contact section
- [ ] Real coach photo integration (Lucas Willian sends actual photo)
- [ ] Instagram feed integration (@escola.cruzeiro.vilavelha)

### P2 (Nice to Have)
- [ ] Online enrollment/payment flow (Stripe/Pix)
- [ ] Blog section for training tips and news
- [ ] Photo gallery of students and events
- [ ] WhatsApp Business API integration for automated responses
- [ ] SEO optimization (meta tags, sitemap, schema markup)
- [ ] Portuguese language i18n refinements
- [ ] Live chat widget

---

## Next Tasks
1. Replace coach placeholder photo with Lucas Willian's real photo
2. Add Google Maps embed for academy location
3. Build admin panel to manage/view contact form submissions
4. Integrate Instagram feed widget
5. Add SEO meta tags and Open Graph tags for social sharing
