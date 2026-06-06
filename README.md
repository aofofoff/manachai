# Manachai Cashews · Cafe mana·san

Two-page bilingual (Thai/English) marketing site for **Manachai Cashews** and its
sister **Cafe mana·san**, in Ranong. Built with Next.js (App Router) on the
"Chai Amber" design system.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Static now, backend later

Every page here is content-only, so `next build` **statically generates** it — it
deploys to any static host as-is. We intentionally do **not** set
`output: 'export'` in `next.config.mjs`, which keeps the option to add server
features later (API routes under `app/api/`, server actions, middleware) without
restructuring. See the comment in `next.config.mjs` for the pure-static toggle.

## Structure

```
app/
  layout.tsx        Root layout; imports the design-system CSS
  page.tsx          Renders <Site />
components/
  Site.tsx          'use client' — top tab switcher (nut shop ⇄ cafe)
  TopNav.tsx        Sticky black nav + tabs
  NutShop.tsx       Nut-shop page (hero, promo, products, heritage, contact)
  Cafe.tsx          'use client' — cafe page + interactive menu tabs
  ProductCard.tsx   One product card (data-driven)
  ImageSlot.tsx     Photo placeholder element
lib/
  content.ts        All products, sets, and menu data
styles/
  colors_and_type.css   Design foundations (verbatim from the design handoff)
  styles.css            Site styles (verbatim, + image-slot render rules)
public/assets/      Logos
types/global.d.ts   TSX typing for the <image-slot> element
```

## Adding real photos

Slots show a placeholder label until you give them a `src`:

```tsx
<ImageSlot src="/assets/hero.jpg" alt="Cashews" />
```

Drop files in `public/assets/` and reference them as `/assets/<file>`.

## Still to fill in (unpriced in the source design)

- Promo set prices (currently `฿—`) in `lib/content.ts`
- Cafe menu prices (currently "Price TBD")
- Real `LINE @manachai` URL (currently `#`)
