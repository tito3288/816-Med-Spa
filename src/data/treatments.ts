// Single source of truth for the Treatments system.
// Drives the /treatments index, the /treatments/[slug] pages, and the header
// mega menu. Pages here don't define new offerings — each entry curates
// existing concerns and services by slug and frames them in a fresh narrative
// for a body area or life stage.

import { concerns, type Concern } from "./concerns";
import { getService, type Service } from "./services";

export type TreatmentGroup = "By Area" | "By Age";

export interface TreatmentFaq {
  q: string;
  a: string;
}

export interface Treatment {
  slug: string;
  name: string;
  group: TreatmentGroup;
  image: string;
  intro: string;
  description: string[];
  concernSlugs: string[]; // -> src/data/concerns.ts
  serviceSlugs: string[]; // -> src/data/services.ts
  faqs: TreatmentFaq[];
}

// Display order for group columns / sections.
export const treatmentGroups: TreatmentGroup[] = ["By Area", "By Age"];

// All image IDs below are verified to resolve on images.unsplash.com
// (reused from concerns.ts / services.ts).
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&h=1500&q=80`;

export const treatments: Treatment[] = [
  // ─── By Area ───────────────────────────────────────────────────────
  {
    slug: "forehead-and-brows",
    name: "Forehead & Brows",
    group: "By Area",
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    intro:
      "Smooth lines, lifted brows, and a naturally rested expression — without losing an ounce of character.",
    description: [
      "The forehead and brows are where expression lives — every raise, furrow, and moment of concentration leaves its trace. Over time, horizontal lines settle across the brow, vertical '11s' form between the eyebrows, and the brows themselves can drift downward, leaving the whole upper face looking heavier than it feels.",
      "Our approach starts conservative: precisely placed wrinkle relaxers to soften the muscles that etch these lines, a subtle neurotoxin brow lift to reopen the eyes, and collagen-building treatments like Morpheus8 to firm the skin itself. The goal is never a frozen forehead — it's you, looking rested.",
    ],
    concernSlugs: ["forehead-lines", "frown-lines", "fine-lines", "wrinkles"],
    serviceSlugs: ["forehead-lines", "frown-lines", "brow-lift", "morpheus8"],
    faqs: [
      {
        q: "Will my forehead look frozen after treatment?",
        a: "No — our injectors take a conservative, natural approach, easing the lines while preserving your expression. You should look refreshed, not frozen.",
      },
      {
        q: "How long do results in this area last?",
        a: "Wrinkle relaxer results typically last three to four months, while collagen-building treatments like Morpheus8 continue improving skin quality for months after a series.",
      },
    ],
  },
  {
    slug: "eyes",
    name: "Eyes",
    group: "By Area",
    image: unsplash("photo-1487412947147-5cebf100ffc2"),
    intro: "Brighten, smooth, and open the area people notice first.",
    description: [
      "The skin around the eyes is the thinnest on the face, which is why this area is often the first to show age. Crow's feet fan from the outer corners with every smile, hollows can deepen under the eyes, and heavy brows can make eyes look tired even after a full night's sleep.",
      "We treat the eye area with a light, precise touch — softening crow's feet with targeted wrinkle relaxers, lifting the brow to open the eyes, and rebuilding the delicate skin with collagen-stimulating treatments. The result is a brighter, more awake look that's still unmistakably you.",
    ],
    concernSlugs: ["crows-feet", "hollow-under-eyes", "fine-lines"],
    serviceSlugs: ["crows-feet", "brow-lift", "morpheus8"],
    faqs: [
      {
        q: "What can be done about always looking tired?",
        a: "Often it's a combination — softening crow's feet, a subtle brow lift, and addressing hollowness under the eyes. A consultation will pinpoint what's driving the tired look.",
      },
      {
        q: "Is treating the eye area safe?",
        a: "Yes. It's delicate work, and our medical providers use precise, conservative techniques designed specifically for the thin skin around the eyes.",
      },
    ],
  },
  {
    slug: "cheeks-and-mid-face",
    name: "Cheeks & Mid-Face",
    group: "By Area",
    image: unsplash("photo-1570172619644-dfd03ed5d881"),
    intro: "Restore the lift, contour, and support that carry the whole face.",
    description: [
      "The mid-face is the architecture of a youthful look. As the cheeks lose volume with age, the face flattens, shadows deepen, and the lines from the nose to the mouth become more pronounced — changes that can make you look tired well before you feel it.",
      "Restoring the cheeks does more than add volume; it lifts and supports everything below. With strategically placed dermal filler, skin-tightening Morpheus8, and IPL to even tone, we rebuild the mid-face gradually and naturally — contour without the 'done' look.",
    ],
    concernSlugs: ["volume-loss-in-cheeks", "nasolabial-folds", "wrinkles"],
    serviceSlugs: ["cheek-filler", "morpheus8", "ipl"],
    faqs: [
      {
        q: "Will cheek filler look obvious?",
        a: "Not with our approach. We restore support gradually and conservatively, so friends notice you look refreshed — not that you've had work done.",
      },
      {
        q: "Why treat the cheeks for lines near my mouth?",
        a: "Nasolabial folds often deepen because the cheeks above them have lost volume. Restoring mid-face support softens those folds at the source.",
      },
    ],
  },
  {
    slug: "lips-and-mouth",
    name: "Lips & Mouth",
    group: "By Area",
    image: unsplash("photo-1512290923902-8a9f81dc236c"),
    intro: "Natural shape, soft volume, and a smile that ages gracefully.",
    description: [
      "The mouth is one of the most expressive parts of the face — and one of the first to show change. Lips lose volume and definition, fine lines gather at the edges, and the corners of the mouth can turn downward as the folds around them deepen.",
      "Whether it's a few units of neurotoxin for a subtle lip flip, hyaluronic acid filler for shape and hydration, or Morpheus8 to smooth the surrounding skin, we enhance the mouth with restraint — soft, balanced results that keep your smile yours.",
    ],
    concernSlugs: ["marionette-lines", "nasolabial-folds", "fine-lines"],
    serviceSlugs: ["lip-filler", "lip-flip", "morpheus8"],
    faqs: [
      {
        q: "What's the difference between a lip flip and lip filler?",
        a: "A lip flip relaxes the upper lip muscle so the lip rolls subtly outward — no added volume. Filler adds shape, structure, and hydration. Many clients start with a flip and add filler later.",
      },
      {
        q: "Will my lips look overdone?",
        a: "No. We build volume conservatively, in balance with your features, and you're involved at every step.",
      },
    ],
  },
  {
    slug: "chin-and-jawline",
    name: "Chin & Jawline",
    group: "By Area",
    image: unsplash("photo-1598440947619-2c35fc9aa908"),
    intro: "Definition where you want it — a slimmer, smoother, more sculpted lower face.",
    description: [
      "The lower face frames everything above it. A dimpled chin, a jawline widened by overactive masseter muscles, or fullness beneath the chin can throw off the balance of the whole face — and this area is notoriously resistant to diet and exercise.",
      "We sculpt the chin and jawline with precise, non-surgical tools: neurotoxin to smooth chin dimpling and slim the masseters (easing jaw tension in the process), and Morpheus8 to tighten and define. The result is a cleaner profile and a lower face in proportion.",
    ],
    concernSlugs: ["double-chin", "marionette-lines"],
    serviceSlugs: ["chin-dimpling", "jawline-and-masseter", "morpheus8"],
    faqs: [
      {
        q: "Can you slim my jaw without surgery?",
        a: "Often, yes. If enlarged masseter muscles are widening your lower face, relaxing them with neurotoxin gradually slims the jawline — while relieving clenching and tension.",
      },
      {
        q: "How long until I see a more defined jawline?",
        a: "Masseter treatment develops over four to eight weeks; skin tightening from Morpheus8 builds over a series of treatments.",
      },
    ],
  },
  {
    slug: "neck-and-decolletage",
    name: "Neck & Décolletage",
    group: "By Area",
    image: unsplash("photo-1552693673-1bf958298935"),
    intro: "The area skincare forgets — firmed, brightened, and brought back in line with your face.",
    description: [
      "The neck and chest often tell a different story than a well-cared-for face. The skin here is thinner and produces less oil, so sun exposure, gravity, and time show up early: crepey texture, laxity, sun spots, and lines across the décolletage.",
      "We extend facial-quality care downward — Morpheus8 to rebuild collagen and firm laxity, IPL to lift away sun damage and even tone, and professional peels to renew texture — so your neck and chest match the face they belong to.",
    ],
    concernSlugs: ["skin-laxity", "sun-damage", "skin-aging", "double-chin"],
    serviceSlugs: ["morpheus8", "ipl", "transform-peel"],
    faqs: [
      {
        q: "Can crepey neck skin really be improved without surgery?",
        a: "Yes — radiofrequency microneedling like Morpheus8 stimulates collagen deep in the skin, firming and thickening it over a series of treatments.",
      },
      {
        q: "How many treatments will my neck need?",
        a: "Most clients see meaningful change with a series of two to three sessions, spaced about a month apart, with results building for months afterward.",
      },
    ],
  },
  {
    slug: "abdomen-and-core",
    name: "Abdomen & Core",
    group: "By Area",
    image: unsplash("photo-1570554886111-e80fcca6a029"),
    intro: "Tighten, tone, and re-strengthen your center — no surgery, no downtime.",
    description: [
      "The midsection carries the story of our lives — pregnancies, weight changes, years at a desk. Stubborn fat that ignores diet and exercise, core muscles that never quite recovered postpartum, loose skin, and stretch marks are among the most common concerns we treat.",
      "Our body-contouring technology works on every layer: Evolve to sculpt fat, tone muscle, and tighten skin; Morpheus8 for deeper skin remodeling; and medically supervised weight loss when the goal is bigger than any one area. It starts with an honest consultation about what will actually work for your body.",
    ],
    concernSlugs: [
      "stubborn-fat",
      "weak-core-muscles",
      "postpartum-body",
      "stretch-marks",
      "muscle-tone-loss",
    ],
    serviceSlugs: ["evolve", "morpheus8", "weight-loss-women", "weight-loss-men"],
    faqs: [
      {
        q: "Is body contouring a substitute for weight loss?",
        a: "No — contouring sculpts and tones; it isn't weight loss. If weight is the primary goal, our medically supervised programs may be the better starting point, and the two work beautifully together.",
      },
      {
        q: "Does body contouring hurt?",
        a: "Most clients describe warmth and muscle contractions rather than pain, with no downtime — you can return to your day immediately.",
      },
    ],
  },
  {
    slug: "arms-and-legs",
    name: "Arms & Legs",
    group: "By Area",
    image: unsplash("photo-1556228578-8c89e6adf883"),
    intro: "Smoother, more confident limbs — from cellulite to spider veins to unwanted hair.",
    description: [
      "Arms and legs come with their own set of concerns: cellulite that resists every workout, spider veins that surface over time, stubborn pockets of fat, and the endless cycle of shaving and waxing.",
      "We treat limbs comprehensively — Evolve to smooth and tone, IPL to address visible veins and sun damage, and laser hair removal to end the razor cycle for good. Treatments are quick, comfortable, and designed around real schedules.",
    ],
    concernSlugs: ["cellulite", "spider-veins", "unwanted-and-excess-hair", "stubborn-fat"],
    serviceSlugs: ["laser-hair-removal", "evolve", "ipl"],
    faqs: [
      {
        q: "Does laser hair removal really last?",
        a: "After a full series, most clients see permanent reduction of 80–90%, with only occasional quick touch-ups. It works best on hair with pigment.",
      },
      {
        q: "Can cellulite actually be treated?",
        a: "It can be meaningfully improved. Radiofrequency treatments like Evolve tighten skin and smooth the dimpled texture, especially as part of a series.",
      },
    ],
  },
  {
    slug: "underarms",
    name: "Underarms",
    group: "By Area",
    image: unsplash("photo-1612817288484-6f916006741a"),
    intro: "Freedom from razors — and from sweat that won't quit.",
    description: [
      "Underarms are a small area with an outsized impact on daily life. Between constant shaving, irritation, and — for many people — sweating that no antiperspirant can keep up with, this little zone can be a big source of self-consciousness.",
      "Two treatments change that: laser hair removal to permanently reduce hair and the irritation that comes with removing it, and underarm neurotoxin to dramatically curb excessive sweating for months at a time. Quick appointments, lasting freedom.",
    ],
    concernSlugs: ["unwanted-and-excess-hair"],
    serviceSlugs: ["underarm-neurotoxin", "laser-hair-removal"],
    faqs: [
      {
        q: "How does neurotoxin stop underarm sweat?",
        a: "It blocks the signal that activates sweat glands in the treated area. Most clients see a dramatic reduction within a week, lasting four to six months.",
      },
      {
        q: "How many laser sessions do underarms take?",
        a: "Usually six to eight quick sessions, spaced a few weeks apart — each one takes only minutes.",
      },
    ],
  },

  // ─── By Age ────────────────────────────────────────────────────────
  {
    slug: "under-20",
    name: "Under 20",
    group: "By Age",
    image: unsplash("photo-1505944270255-72b8c68c6a70"),
    intro: "Healthy skin habits, calmer breakouts, and confidence that carries into everything.",
    description: [
      "Teenage skin works hard. Hormones drive oil production up, breakouts arrive at the worst possible moments, and the habits formed now — good or bad — echo for decades. This is the age where great skincare pays its highest dividends.",
      "For younger clients, our focus is education and skin health, not intervention: gentle professional facials, clarifying peels for acne and congestion, and honest guidance on routines and SPF. We build foundations — clear skin today, healthy skin for life.",
    ],
    concernSlugs: ["acne", "oily-skin", "enlarged-pores", "redness-and-rosacea"],
    serviceSlugs: ["clarify-peel", "signature-facial", "dermaplane-facial", "laser-hair-removal"],
    faqs: [
      {
        q: "Is a med spa appropriate for teenagers?",
        a: "For skin-health treatments like facials and acne-focused peels, absolutely. We keep care age-appropriate, parents are welcome, and guardian consent is required for clients under 18.",
      },
      {
        q: "What actually helps teenage acne?",
        a: "Consistency — a simple routine, professional clarifying treatments, and not picking. When acne is severe, we'll be honest about when a dermatologist is the right next step.",
      },
    ],
  },
  {
    slug: "in-your-20s",
    name: "In Your 20s",
    group: "By Age",
    image: unsplash("photo-1620331311520-246422fd82f9"),
    intro: "Your skin's best decade — protect it, polish it, and set the foundation.",
    description: [
      "In your 20s, collagen is abundant and skin bounces back fast — which makes this the decade of prevention. The choices you make now, sun protection above all, determine how your skin ages for the next forty years.",
      "Care in this decade is light-touch: facials and dermaplaning for glow, peels to clear post-acne marks and refine texture, laser hair removal while you're building your routines — and if you want subtle enhancement, natural-looking lip filler done with restraint.",
    ],
    concernSlugs: ["acne-scars", "dull-skin", "dehydrated-skin", "unwanted-and-excess-hair"],
    serviceSlugs: [
      "signature-facial",
      "dermaplane-facial",
      "refine-peel",
      "laser-hair-removal",
      "lip-filler",
    ],
    faqs: [
      {
        q: "Should I start Botox in my 20s?",
        a: "There's no universal answer. If expression lines are starting to linger, small preventative doses can slow their development — but for most 20-somethings, SPF and skincare matter far more.",
      },
      {
        q: "What's the single best investment for my skin right now?",
        a: "Daily SPF, without question. After that, a consistent routine and periodic professional treatments to keep texture and tone at their best.",
      },
    ],
  },
  {
    slug: "in-your-30s",
    name: "In Your 30s",
    group: "By Age",
    image: unsplash("photo-1610992015732-2449b76344bc"),
    intro: "The first lines, the last of the baby face — this is the decade to get ahead.",
    description: [
      "Your 30s are when change first whispers: collagen production slows, cell turnover drops, fine lines linger after the expression fades, and pregnancy or stress can leave their marks — melasma, dullness, a body that feels different.",
      "This is the highest-leverage decade for treatment. Wrinkle relaxers soften lines before they set, Morpheus8 rebuilds collagen while your skin still produces it readily, and brightening facials keep the glow that used to be automatic. Small, consistent steps now mean less to correct later.",
    ],
    concernSlugs: ["fine-lines", "crows-feet", "dull-skin", "melasma", "postpartum-body"],
    serviceSlugs: [
      "forehead-lines",
      "frown-lines",
      "morpheus8",
      "luminate-facial",
      "retinol-plus-facial",
    ],
    faqs: [
      {
        q: "Is my 30s too early for Morpheus8?",
        a: "Not at all — collagen-stimulating treatments work best while your skin still responds vigorously. Prevention now beats correction later.",
      },
      {
        q: "I just had a baby — what's safe for me?",
        a: "If you're nursing, we'll plan conservatively and time certain treatments appropriately. Many skin-brightening and collagen treatments are still on the table; we'll map it out at your consultation.",
      },
    ],
  },
  {
    slug: "in-your-40s",
    name: "In Your 40s",
    group: "By Age",
    image: unsplash("photo-1532413992378-f169ac26fff0"),
    intro: "Correction meets prevention — restore what's shifted, protect what hasn't.",
    description: [
      "In your 40s, the changes get structural. Volume loss in the cheeks flattens the mid-face and deepens the folds below, lines stay visible at rest, sun exposure from decades past surfaces as pigment, and skin begins to loosen along the jaw.",
      "The good news: this is exactly what modern med spa medicine does best. Dermal filler restores structural support, Morpheus8 firms and thickens skin, IPL clears accumulated sun damage, and professional peels resurface texture. Done well, the result isn't a different face — it's your face, rested and resilient.",
    ],
    concernSlugs: [
      "wrinkles",
      "volume-loss-in-cheeks",
      "nasolabial-folds",
      "hyperpigmentation",
      "skin-laxity",
    ],
    serviceSlugs: ["cheek-filler", "morpheus8", "ipl", "transform-peel"],
    faqs: [
      {
        q: "Where should I start if I've never had anything done?",
        a: "A consultation. Most first-time clients in their 40s start with one foundational treatment — often IPL or Morpheus8 — then layer thoughtfully from there.",
      },
      {
        q: "Filler or Morpheus8 — which do I need?",
        a: "They solve different problems: filler restores lost volume and support; Morpheus8 improves the skin itself. Many treatment plans in your 40s use both, in stages.",
      },
    ],
  },
  {
    slug: "50-and-beyond",
    name: "50 & Beyond",
    group: "By Age",
    image: unsplash("photo-1525909002-1b05e0c869d8"),
    intro:
      "Vitality is the goal — firmer skin, balanced hormones, and energy that matches your ambitions.",
    description: [
      "Fifty and beyond is when aesthetics and wellness become inseparable. Skin laxity accelerates as estrogen and testosterone decline, energy and sleep can falter, weight redistributes — and treating the surface alone misses half the story.",
      "That's why our approach here is whole-person: Morpheus8 and resurfacing peels to firm and renew skin, hormone replacement therapy for women and men to restore what time has diminished, medically supervised weight loss, and Empower for women's intimate wellness. It's not about turning back the clock — it's about feeling fully yourself in this chapter.",
    ],
    concernSlugs: [
      "skin-laxity",
      "skin-aging",
      "weight-gain",
      "low-energy",
      "womens-hormone-balancing",
      "mens-hormone-balancing",
    ],
    serviceSlugs: ["morpheus8", "hrt-women", "hrt-men", "empower", "transform-peel"],
    faqs: [
      {
        q: "Is it too late for my skin to respond?",
        a: "No. Skin builds collagen at every age — treatments like Morpheus8 and resurfacing peels produce meaningful firming and smoothing well into your 70s.",
      },
      {
        q: "How do I know if hormones are part of the picture?",
        a: "Symptoms like fatigue, poor sleep, weight changes, and low libido are common signals. We start with comprehensive lab work, then build a plan around your actual levels.",
      },
    ],
  },
];

const treatmentBySlug = new Map(treatments.map((treatment) => [treatment.slug, treatment]));

export const getTreatment = (slug: string): Treatment | undefined => treatmentBySlug.get(slug);

export const treatmentsByGroup = (group: TreatmentGroup): Treatment[] =>
  treatments.filter((treatment) => treatment.group === group);

// Frankenstein wiring: resolve curated slugs against the source-of-truth data.
// Throws on an unknown slug so a typo fails the build instead of silently
// rendering an empty card.
const concernBySlug = new Map(concerns.map((concern) => [concern.slug, concern]));

export const resolveConcerns = (slugs: string[]): Concern[] =>
  slugs.map((slug) => {
    const concern = concernBySlug.get(slug);
    if (!concern) throw new Error(`treatments.ts references unknown concern slug: "${slug}"`);
    return concern;
  });

export const resolveServices = (slugs: string[]): Service[] =>
  slugs.map((slug) => {
    const service = getService(slug);
    if (!service) throw new Error(`treatments.ts references unknown service slug: "${slug}"`);
    return service;
  });
