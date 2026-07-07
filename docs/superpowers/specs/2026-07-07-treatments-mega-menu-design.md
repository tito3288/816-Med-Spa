# Treatments Mega Menu + Landing Pages — Design

**Date:** 2026-07-07
**Status:** Approved (pending spec review)

## Overview

Add a third mega menu, **Treatments**, to the site header alongside Services and
Concerns, with two curated groups:

- **By Area** — 9 body-area pages (Forehead & Brows → Underarms)
- **By Age** — 5 age-bracket pages (Under 20 → 50 & Beyond)

Each group entry links to a new landing page that composes ("frankensteins")
existing concerns and services data into a fresh narrative for that area or
life stage. No new treatments or concerns are invented — every card on these
pages resolves to an existing `/concerns/*` or `/services/*` page by slug.

## Goals

1. Fill the placeholder `#treatments` nav item with a real mega menu + pages.
2. Give visitors two new browsing mental models: "where on my body" and
   "people my age."
3. Reuse the established visual language and data patterns — no new design
   system, no CMS, no duplication of concern/service copy.

## Non-goals

- No changes to existing concerns/services data or pages (except one additive
  entry in `process.ts` and a by-slug lookup export if needed).
- No new imagery pipeline — reuse the verified Unsplash ID pattern.
- No homepage changes; the `#treatments` anchor on the homepage is simply no
  longer referenced by the nav.

## Data model

New file: `src/data/treatments.ts` — single source of truth, mirroring
`concerns.ts` conventions (header comment, `unsplash()` helper, typed arrays,
accessor functions).

```ts
export type TreatmentGroup = "By Area" | "By Age";

export interface TreatmentFaq {
  q: string;
  a: string;
}

export interface Treatment {
  slug: string;          // e.g. "forehead-and-brows", "in-your-30s"
  name: string;          // e.g. "Forehead & Brows", "In Your 30s"
  group: TreatmentGroup;
  image: string;         // unsplash(id) — reuse verified IDs from concerns/services
  intro: string;         // hero one-liner
  description: string[]; // 2–3 fresh narrative paragraphs, site voice
  concernSlugs: string[];  // -> src/data/concerns.ts
  serviceSlugs: string[];  // -> src/data/services.ts
  faqs: TreatmentFaq[];    // 2–3 per page
}

export const treatmentGroups: TreatmentGroup[] = ["By Area", "By Age"];
export const treatments: Treatment[];
export const treatmentsByGroup = (group: TreatmentGroup) => Treatment[];
export const getTreatment = (slug: string) => Treatment | undefined;

// Frankenstein wiring — MUST throw on a bad slug so typos fail the build,
// not silently render an empty card:
export const resolveConcerns = (slugs: string[]) => Concern[];  // throws on unknown slug
export const resolveServices = (slugs: string[]) => Service[];  // throws on unknown slug
```

FAQs live inline in the same file (14 entries stays manageable; the
`concern-details.ts` split exists because concerns has 38 entries with
signs/causes/faqs — not needed here).

### Supporting change: `src/data/process.ts`

Add one entry, `Treatments`, to `processByCategory` — a generic 3-step
journey (Consultation → Personalized Plan → Results & Maintenance) used by all
14 pages, since age pages don't map to a single Face/Body/Skin/Wellness
category.

## Header mega menu (`SiteHeader.astro`)

- `NavLink.mega` type widens to `"concerns" | "services" | "treatments"`.
- Replace `{ href: "#treatments", label: "Treatments", caret: true }` with
  `{ href: "/treatments", label: "Treatments", mega: "treatments" }`.
- **Desktop panel:** narrower than the 4-column panels —
  `w-[min(760px,92vw)]`, 3-column grid. "By Area" heading spans 2 columns
  with its 9 items flowing in 2 columns; "By Age" takes column 3 with 5
  items. Both group headings link to `/treatments` (same pattern as
  Concerns column headings linking to `/concerns`).
- **Mobile accordion:** same nested pattern as Concerns/Services —
  Treatments row → By Area / By Age subgroups → item links. Group heading
  rows link to `/treatments`.

## Pages

### `/treatments` — `src/pages/treatments/index.astro`

Modeled on `concerns/index.astro`: dark hero (espresso/parchment), then two
sections — "By Area" card grid (9) and "By Age" card grid (5). Cards use the
same visual card treatment as the concerns index (image, name, intro line).

### `/treatments/[slug]` — `src/pages/treatments/[slug].astro`

Modeled on `concerns/[slug].astro`, `getStaticPaths` from `treatments`.
Section order (same alternating bone/cream rhythm):

1. **Hero** — eyebrow `Treatments · By Area` / `Treatments · By Age`, name,
   intro, offset image (same espresso hero as concerns).
2. **Narrative** ("Understanding") — the 2–3 `description` paragraphs.
3. **Common Concerns** — cards from `resolveConcerns(concernSlugs)` linking
   to `/concerns/{slug}`, using each concern's existing name/intro/image.
4. **Treatments We Recommend** — cards from `resolveServices(serviceSlugs)`
   linking to `/services/{slug}`.
5. **What to Expect** — `processByCategory["Treatments"]` steps.
6. **Why Choose 816** — existing `WhyChoose816.astro`.
7. **FAQ** — the page's `faqs`.
8. **Related** — up to 4 other treatments from the same group.
9. **CTA** — Request An Appointment → `https://816medspa.janeapp.com/`.

SEO: `title` = `{name} | Treatments | 816 Med Spa`, canonical
`https://816medspa.com/treatments/{slug}/`, `ogImage` = page image — same
props pattern as concern pages.

## Content mapping (the frankenstein table)

Every slug below already exists in `concerns.ts` / `services.ts`.

### By Area

| Slug | Name | Concerns | Services |
|---|---|---|---|
| `forehead-and-brows` | Forehead & Brows | forehead-lines, frown-lines, fine-lines, wrinkles | forehead-lines, frown-lines, brow-lift, morpheus8 |
| `eyes` | Eyes | crows-feet, hollow-under-eyes, fine-lines | crows-feet, brow-lift, morpheus8 |
| `cheeks-and-mid-face` | Cheeks & Mid-Face | volume-loss-in-cheeks, nasolabial-folds, wrinkles | cheek-filler, morpheus8, ipl |
| `lips-and-mouth` | Lips & Mouth | marionette-lines, nasolabial-folds, fine-lines | lip-filler, lip-flip, morpheus8 |
| `chin-and-jawline` | Chin & Jawline | double-chin, marionette-lines | chin-dimpling, jawline-and-masseter, morpheus8 |
| `neck-and-decolletage` | Neck & Décolletage | skin-laxity, sun-damage, skin-aging, double-chin | morpheus8, ipl, transform-peel |
| `abdomen-and-core` | Abdomen & Core | stubborn-fat, weak-core-muscles, postpartum-body, stretch-marks, muscle-tone-loss | evolve, morpheus8, weight-loss-women, weight-loss-men |
| `arms-and-legs` | Arms & Legs | cellulite, spider-veins, unwanted-and-excess-hair, stubborn-fat | laser-hair-removal, evolve, ipl |
| `underarms` | Underarms | unwanted-and-excess-hair | underarm-neurotoxin, laser-hair-removal |

### By Age

| Slug | Name | Concerns | Services |
|---|---|---|---|
| `under-20` | Under 20 | acne, oily-skin, enlarged-pores, redness-and-rosacea | clarify-peel, signature-facial, dermaplane-facial, laser-hair-removal |
| `in-your-20s` | In Your 20s | acne-scars, dull-skin, dehydrated-skin, unwanted-and-excess-hair | signature-facial, dermaplane-facial, lip-filler, laser-hair-removal, refine-peel |
| `in-your-30s` | In Your 30s | fine-lines, crows-feet, dull-skin, melasma, postpartum-body | forehead-lines, frown-lines, morpheus8, luminate-facial, retinol-plus-facial |
| `in-your-40s` | In Your 40s | wrinkles, volume-loss-in-cheeks, nasolabial-folds, hyperpigmentation, skin-laxity | cheek-filler, morpheus8, ipl, transform-peel |
| `50-and-beyond` | 50 & Beyond | skin-laxity, skin-aging, weight-gain, low-energy, womens-hormone-balancing, mens-hormone-balancing | morpheus8, hrt-women, hrt-men, empower, transform-peel |

### Narrative guidelines

- 2–3 paragraphs per page, written in the site's established voice (warm,
  refined, "natural-looking results" register — match concerns.ts copy).
- Area pages: what this area experiences over time → how 816 approaches it.
- Age pages: the decade's skin/body story → prevention vs. correction framing
  → invitation. Under-20 copy stays education/skin-health focused (no
  injectable-forward framing for minors).
- Derive from existing intros/descriptions; do not contradict any claims on
  the linked pages.
- Images: prefer reusing verified Unsplash IDs already present in
  `concerns.ts`/`services.ts` (e.g. area pages can reuse their lead concern's
  image); any new ID must be verified to resolve.

## Error handling

- `resolveConcerns`/`resolveServices` throw with the offending slug at module
  evaluation (build time) — a typo in the mapping breaks `astro build` with a
  clear message.
- `getStaticPaths` generates exactly the 14 slugs; anything else 404s
  (static output, same as concerns/services).

## Verification

1. `npx astro check` — types pass.
2. `npm run build` — all 15 new routes (`/treatments` + 14) generate; slug
   resolution proves every referenced concern/service exists.
3. Dev-server smoke: curl every new route for 200 + spot-check rendered
   section order.
4. Manual click-through: desktop mega menu (hover, keyboard focus), mobile
   accordion (toggle nesting), and a sample of concern/service card links
   landing on the right existing pages.

## Out of scope / future

- Homepage `#treatments` section (nav no longer points there; section can be
  added later).
- Per-page custom photography.
- Analytics on menu usage.
