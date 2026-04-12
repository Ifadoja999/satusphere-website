# SatUsPhere Website - Deployment Guide

## Platform: Vercel

The site is already linked to a Vercel project.

- **Project ID:** `prj_oIEqt5YWYbabyrMli4JiSfmTU8HJ`
- **Org ID:** `team_klaDEFdv1rRc6mVFzbfM9txq`
- **Project name:** `satusphere-website`
- **Target domain:** `satusphere.com`

---

## Deployment Commands

### Deploy to Vercel (one command)

```bash
cd "projects/satusphere-website"
npx vercel --prod
```

If Vercel CLI is not installed:

```bash
npm i -g vercel
cd "projects/satusphere-website"
vercel --prod
```

The `.vercel/project.json` already links this directory to the correct Vercel project. No re-linking needed.

---

## URL Structure

| URL | File served |
|-----|-------------|
| `satusphere.com/` | `index.html` |
| `satusphere.com/learn` | `learn/index.html` |
| `satusphere.com/learn/what-is-bitcoin` | `seo-pages/what-is-bitcoin.html` |
| `satusphere.com/learn/:slug` | `seo-pages/:slug.html` |
| `satusphere.com/sitemap.xml` | `sitemap.xml` |
| `satusphere.com/robots.txt` | `robots.txt` |

Routing is handled by `vercel.json` - clean URLs are enabled (`cleanUrls: true`), trailing slashes are removed, and `/learn/:slug` rewrites to `/seo-pages/:slug.html`.

---

## Current File Inventory

```
index.html                      - Homepage (placeholder until Google Stitch design export)
vercel.json                     - Routing config, headers, redirects
sitemap.xml                     - 40+ URLs for all pages + tools
robots.txt                      - Allow all, sitemap reference
learn/index.html                - /learn hub page (33 topic links + CTAs)
seo-pages/                      - 33 SEO pages (all fully written)
tools/                          - Free beginner tools (separate Vercel project)
landing-page/copy.md            - Landing page copy (design pending from Google Stitch)
templates/seo-page-template.html - Template for new SEO pages
templates/structured-data.md    - Structured data reference
```

---

## SEO Pages (33 total)

All pages are fully written with:
- Correct canonical URLs (`satusphere.com/learn/{slug}`)
- Open Graph + Twitter Card meta
- Schema.org structured data (Organization, BreadcrumbList, Article/FAQPage)
- Internal links to course CTAs
- Internal cross-links to the `/learn` hub

**Tier 1 (highest search volume):**
- what-is-bitcoin
- what-is-bitcoin-mining
- what-is-a-bitcoin-wallet
- what-is-the-lightning-network
- what-is-a-private-key
- what-is-bitcoin-halving
- what-is-proof-of-work
- how-does-blockchain-work
- what-is-a-seed-phrase
- who-created-bitcoin

**Tier 2 + Tier 3:** 23 additional pages covering advanced and niche topics.

---

## When the Landing Page Design Arrives (SATAA-11)

1. Export HTML/CSS from Google Stitch
2. Replace `index.html` with the Stitch export (adapt the head meta tags from current `index.html`)
3. Move placeholder `index.html` content to `landing-page/placeholder.html` for reference
4. Run `vercel --prod` to deploy
5. Submit sitemap to Google Search Console: `satusphere.com/sitemap.xml`

---

## Post-Deploy Checklist

- [ ] Verify `satusphere.com` resolves correctly
- [ ] Check `satusphere.com/learn` loads the hub page
- [ ] Spot-check 3 SEO pages: `satusphere.com/learn/what-is-bitcoin`, `satusphere.com/learn/what-is-bitcoin-mining`, `satusphere.com/learn/what-is-bitcoin-halving`
- [ ] Confirm `satusphere.com/sitemap.xml` is accessible
- [ ] Confirm `satusphere.com/robots.txt` is accessible
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for the 5 highest-priority pages in GSC

---

## Adding New SEO Pages

1. Copy `templates/seo-page-template.html`
2. Replace all `{{PLACEHOLDER}}` variables
3. Save to `seo-pages/{slug}.html`
4. Add URL to `sitemap.xml`
5. Add card to `learn/index.html`
6. Run `vercel --prod`

---

## Domain Setup (if needed)

If `satusphere.com` is not yet pointing to Vercel:

1. In Vercel dashboard, go to Project Settings > Domains
2. Add `satusphere.com` and `www.satusphere.com`
3. Update DNS at domain registrar:
   - A record: `76.76.21.21`
   - CNAME `www`: `cname.vercel-dns.com`
