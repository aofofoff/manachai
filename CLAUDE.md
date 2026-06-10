# CLAUDE.md — manachai-next

Project-specific notes for working in this Next.js app
(Manachai Cashews + Cafe mana·san — bilingual Thai/English marketing site).

## Build / dev server

- **Never run `next build` while the dev/preview server is running.** They share
  the `.next` folder, and building underneath a running dev server corrupts it
  (`Cannot find module './948.js'`, blank/unstyled pages). Stop the preview
  server first, then build. If it's already corrupted: stop the server,
  `rm -rf .next`, and restart.

## Git

- This repo uses a **personal** identity, not the company one:
  `aofofoff` / `wattanagaroon2@gmail.com` (set repo-locally).
- Remote: `github.com:aofofoff/manachai` (SSH, key `~/.ssh/id_ed25519`).
- The repo is **public** — don't commit anything private.
- Commit/push only when asked.

## Images

- **Use ASCII filenames** in `public/images/` (e.g. `pumpkin-seed.jpg`), never
  Thai filenames — Thai names cause URL-encoding issues on Vercel. If a photo
  arrives with a Thai name, rename it to an ASCII slug before wiring it up.
- Product/section photos go through `<ImageSlot>`; empty slots auto-render a
  branded "photo coming" frame, so missing photos still look intentional.

## Content & data (single sources of truth)

- `lib/content.ts` — all product, promo-set, shrimp-paste, and cafe-menu data.
- `lib/links.ts` — canonical external URLs (LINE/Facebook/Maps/Wongnai) + geo;
  used by both visible links and JSON-LD so they never drift.
- `lib/faq.ts` — FAQ Q&A, used by both the visible FAQ section and FAQPage schema.
- `lib/line.ts` — builds LINE pre-filled order deep links.

## Structure

- App Router, static-first (no `output: 'export'`, to keep backend options open).
- Two routes: `/` (cashew shop) and `/cafe`. Each has its own metadata, OG
  image, and LocalBusiness JSON-LD. Nav active state derives from `usePathname()`.
