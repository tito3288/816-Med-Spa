// Single source of truth for the Services system.
// Drives the /services index, the /services/[slug] pages, and the header mega menu.
//
// NOTE on structure: a service is defined ONCE (so a treatment offered across
// multiple categories — e.g. Morpheus8 — is a single page). The mega menu and
// index are driven by `serviceMenu`, which references services by slug and can
// list the same service under multiple category / sub-group headings.

export type ServiceCategory = "Face" | "Body" | "Skin" | "Wellness";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory; // primary category, used for "related services"
  subgroup: string; // shown as the page eyebrow
  image: string;
  intro: string;
  description: string[];
  areas?: string[]; // treatment areas / zones, when applicable
}

export interface ServiceMenuGroup {
  label: string;
  services: string[]; // slugs
}

export interface ServiceMenuColumn {
  category: ServiceCategory;
  groups: ServiceMenuGroup[];
}

export const serviceCategories: ServiceCategory[] = ["Face", "Body", "Skin", "Wellness"];

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&h=1500&q=80`;

export const services: Service[] = [
  // ─── Face · Injectables ────────────────────────────────────────────
  {
    slug: "forehead-lines",
    name: "Forehead Lines",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    intro: "Soften the horizontal lines across your brow with precisely placed neurotoxin.",
    description: [
      "Forehead lines deepen every time we raise our eyebrows, gradually settling into the skin even at rest. A few units of neurotoxin relax the muscles responsible and smooth the area.",
      "Our injectors take a conservative, natural approach — easing the lines while preserving your expression, so you look refreshed rather than frozen.",
    ],
  },
  {
    slug: "frown-lines",
    name: "Frown Lines",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1616394584738-fc6e612e71b9"),
    intro: "Relax the vertical '11s' between your brows for a softer, calmer look.",
    description: [
      "Frown lines form between the eyebrows from years of concentrating and squinting, often making the face look tense or tired.",
      "A targeted neurotoxin treatment relaxes these muscles, smoothing the '11s' and restoring a more rested, approachable expression.",
    ],
  },
  {
    slug: "crows-feet",
    name: "Crow's Feet",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1487412947147-5cebf100ffc2"),
    intro: "Smooth the fine lines that fan from the corners of your eyes.",
    description: [
      "Crow's feet appear at the outer corners of the eyes from smiling and squinting, and are often among the first lines to show.",
      "Precise neurotoxin placement softens these lines and brightens the eye area while keeping your smile warm and natural.",
    ],
  },
  {
    slug: "brow-lift",
    name: "Brow Lift",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1515377905703-c4788e51af15"),
    intro: "A subtle, non-surgical lift to open and refresh the eyes.",
    description: [
      "Over time, the brows can drop and flatten, making the eyes look heavy or tired.",
      "A neurotoxin brow lift relaxes the muscles that pull the brow downward, creating a subtle lift that opens the eyes for a more awake, youthful appearance.",
    ],
  },
  {
    slug: "lip-flip",
    name: "Lip Flip",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1596178060810-72f53ce9a65c"),
    intro: "A touch of neurotoxin to gently enhance your natural lip shape.",
    description: [
      "A lip flip uses a few units of neurotoxin along the upper lip to relax the muscle, allowing the lip to roll subtly outward.",
      "The result is a fuller-looking upper lip and a softer smile — a natural enhancement with no filler required.",
    ],
  },
  {
    slug: "chin-dimpling",
    name: "Chin Dimpling",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1598440947619-2c35fc9aa908"),
    intro: "Smooth a dimpled or 'pebbled' chin for a more even lower face.",
    description: [
      "An overactive chin muscle can create a dimpled, orange-peel texture, especially when speaking or at rest.",
      "Relaxing the muscle with neurotoxin smooths the chin's surface and softens the look of the lower face.",
    ],
  },
  {
    slug: "jawline-and-masseter",
    name: "Jawline and Masseter Muscles",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1571019613454-1cb2f99b2d8b"),
    intro: "Slim and define the jawline while easing clenching and tension.",
    description: [
      "Enlarged masseter muscles — from genetics, clenching, or grinding — can widen and square the lower face.",
      "Neurotoxin relaxes these muscles to slim and soften the jawline over time, while also relieving tension, clenching, and jaw discomfort.",
    ],
  },
  {
    slug: "lip-filler",
    name: "Lip Filler",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1512290923902-8a9f81dc236c"),
    intro: "Add natural volume, shape, and hydration to your lips.",
    description: [
      "Lips lose volume and definition with age, and many people simply want a fuller, more balanced shape.",
      "Using hyaluronic acid filler, we enhance volume and contour with a careful, customized approach for soft, natural-looking results.",
    ],
  },
  {
    slug: "cheek-filler",
    name: "Cheek Filler",
    category: "Face",
    subgroup: "Injectables",
    image: unsplash("photo-1570172619644-dfd03ed5d881"),
    intro: "Restore lift and contour to flattened or hollow cheeks.",
    description: [
      "The cheeks are often the first area to lose volume with age, which can flatten the mid-face and deepen the lines below.",
      "Strategically placed dermal filler restores youthful contour and lift, subtly supporting the entire mid-face for a refreshed look.",
    ],
  },

  // ─── Multi-category sculpting / laser ──────────────────────────────
  {
    slug: "morpheus8",
    name: "Morpheus8",
    category: "Face",
    subgroup: "Sculpting & Resurfacing",
    image: unsplash("photo-1552693673-1bf958298935"),
    intro: "Radiofrequency microneedling that tightens skin and refines texture, face to body.",
    description: [
      "Morpheus8 combines microneedling with radiofrequency energy to remodel deep beneath the surface, stimulating collagen and tightening skin.",
      "It smooths texture, firms laxity, and refines tone with minimal downtime — and can be tailored to the face, neck, and a wide range of body areas.",
    ],
    areas: [
      "Face",
      "Neck",
      "Around the Mouth",
      "Around the Eyes",
      "Face with Neck & Chest",
      "Chest",
      "Back of Arms",
      "Above Knees",
      "Buttocks",
      "Flanks",
      "Inner Thigh",
      "Posterior Thigh",
      "Lower Back",
      "Underarms",
      "Hands",
      "Feet",
    ],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Body",
    subgroup: "Laser",
    image: unsplash("photo-1559599101-f09722fb4948"),
    intro: "Lasting, low-maintenance smoothness with comfortable laser sessions.",
    description: [
      "Laser hair removal targets the pigment in the hair follicle to reduce regrowth over a series of sessions.",
      "It's a comfortable, effective alternative to shaving and waxing, leaving skin smooth across the face and body.",
    ],
    areas: [
      "Lip",
      "Unibrow",
      "Chin",
      "Jaw",
      "Underarms",
      "Bikini",
      "Brazilian",
      "Lower Legs",
      "Full Legs",
    ],
  },
  {
    slug: "ipl",
    name: "IPL Photofacial",
    category: "Skin",
    subgroup: "Laser & Light",
    image: unsplash("photo-1532413992378-f169ac26fff0"),
    intro: "Intense pulsed light to even tone, fade spots, and reduce redness.",
    description: [
      "IPL (intense pulsed light) treats sun damage, brown spots, redness, and visible vessels by targeting pigment and blood vessels beneath the skin.",
      "Over a few sessions, it restores a clearer, brighter, more even complexion with little to no downtime.",
    ],
    areas: ["Face", "Face & Neck", "Face with Neck & Chest"],
  },
  {
    slug: "evolve",
    name: "Evolve Body Contouring",
    category: "Body",
    subgroup: "Body Sculpting",
    image: unsplash("photo-1620916566398-39f1143ab7be"),
    intro: "Hands-free body contouring to tone, firm, and refine.",
    description: [
      "Evolve uses radiofrequency energy and other modalities to remodel skin and target stubborn areas across the body.",
      "It firms, tones, and smooths — a comfortable, hands-free way to refine your shape and support body-contouring goals.",
    ],
    areas: ["Body Treatment", "Arms", "Back", "Buttocks", "Thighs"],
  },
  {
    slug: "underarm-neurotoxin",
    name: "Underarm Neurotoxin",
    category: "Body",
    subgroup: "Injectables",
    image: unsplash("photo-1612817288484-6f916006741a"),
    intro: "Stay dry and confident by reducing excessive underarm sweating.",
    description: [
      "Excessive underarm sweating (hyperhidrosis) can be frustrating and out of proportion to temperature or activity.",
      "Neurotoxin injected into the underarms blocks the signals that trigger sweat glands, keeping you noticeably drier for months at a time.",
    ],
    areas: ["Underarms"],
  },

  // ─── Skin · Facials & Peels ────────────────────────────────────────
  {
    slug: "dermaplane-facial",
    name: "Dermaplane Facial",
    category: "Skin",
    subgroup: "Facials",
    image: unsplash("photo-1505944270255-72b8c68c6a70"),
    intro: "Gentle exfoliation for instantly smoother, brighter, glowing skin.",
    description: [
      "Dermaplaning gently removes dead skin cells and fine vellus hair (peach fuzz) from the surface of the skin.",
      "The result is an immediately smoother, brighter complexion — and better absorption of your skincare and flawless makeup application.",
    ],
  },
  {
    slug: "microdermabrasion-facial",
    name: "Microdermabrasion Facial",
    category: "Skin",
    subgroup: "Facials",
    image: unsplash("photo-1542848284-8afa78a08ccb"),
    intro: "Resurfacing exfoliation that refreshes dull, congested skin.",
    description: [
      "Microdermabrasion uses gentle mechanical exfoliation to buff away the outer layer of dull, dead skin.",
      "It refines texture, unclogs pores, and reveals a fresher, healthier-looking complexion with no downtime.",
    ],
  },
  {
    slug: "signature-facial",
    name: "816 Signature Facial",
    category: "Skin",
    subgroup: "Facials",
    image: unsplash("photo-1620331311520-246422fd82f9"),
    intro: "Our customized signature facial, tailored entirely to your skin.",
    description: [
      "The 816 Signature Facial is fully customized to your skin's needs, combining cleansing, exfoliation, extractions, and nourishing treatment.",
      "It's the perfect reset — relaxing, restorative, and designed to leave your skin glowing and balanced.",
    ],
  },
  {
    slug: "luminate-facial",
    name: "Luminate Facial",
    category: "Skin",
    subgroup: "Facials",
    image: unsplash("photo-1610992015732-2449b76344bc"),
    intro: "A brightening facial that targets dullness and uneven tone.",
    description: [
      "The Luminate Facial focuses on radiance — using brightening actives and exfoliation to address dullness and uneven tone.",
      "Skin is left luminous, refreshed, and noticeably more even after a single treatment.",
    ],
  },
  {
    slug: "retinol-plus-facial",
    name: "Retinol Plus Facial",
    category: "Skin",
    subgroup: "Facials",
    image: unsplash("photo-1487070183336-b863922373d4"),
    intro: "A results-driven facial powered by retinol to renew the skin.",
    description: [
      "The Retinol Plus Facial harnesses retinol to accelerate cell turnover, smooth texture, and improve the appearance of fine lines.",
      "It's an ideal treatment for refreshing tired skin and supporting a smoother, more youthful complexion over time.",
    ],
  },
  {
    slug: "clarify-peel",
    name: "Clarify Peel",
    category: "Skin",
    subgroup: "Chemical Peels",
    image: unsplash("photo-1502323777036-f29e3972d82f"),
    intro: "A clarifying peel to calm breakouts and congestion.",
    description: [
      "The Clarify Peel targets acne-prone and congested skin, exfoliating to clear pores and reduce breakouts.",
      "It helps calm active blemishes and refine the skin for a clearer, healthier-looking complexion.",
    ],
  },
  {
    slug: "refine-peel",
    name: "Refine Peel",
    category: "Skin",
    subgroup: "Chemical Peels",
    image: unsplash("photo-1526045478516-99145907023c"),
    intro: "A balanced peel to smooth texture and refine tone.",
    description: [
      "The Refine Peel exfoliates at a moderate depth to smooth rough texture and improve overall tone and clarity.",
      "It's a versatile treatment for fresher, more even, polished-looking skin.",
    ],
  },
  {
    slug: "transform-peel",
    name: "Transform Peel",
    category: "Skin",
    subgroup: "Chemical Peels",
    image: unsplash("photo-1583001931096-959e9a1a6223"),
    intro: "Our most advanced peel for visible renewal and resurfacing.",
    description: [
      "The Transform Peel is our most intensive resurfacing peel, designed to address deeper concerns like pigmentation, texture, and signs of aging.",
      "With a short period of visible exfoliation, it reveals dramatically renewed, brighter, and smoother skin.",
    ],
  },

  // ─── Wellness ──────────────────────────────────────────────────────
  {
    slug: "weight-loss-women",
    name: "Weight Loss for Women",
    category: "Wellness",
    subgroup: "Medical Weight Loss",
    image: unsplash("photo-1556760544-74068565f05c"),
    intro: "A medically guided weight-loss program designed for women.",
    description: [
      "Our weight-loss program for women combines clinical guidance with modern therapies tailored to female metabolism and hormones.",
      "We support sustainable results with personalized plans, ongoing monitoring, and care focused on how you feel as much as the number on the scale.",
    ],
  },
  {
    slug: "weight-loss-men",
    name: "Weight Loss for Men",
    category: "Wellness",
    subgroup: "Medical Weight Loss",
    image: unsplash("photo-1512496015851-a90fb38ba796"),
    intro: "A medically guided weight-loss program designed for men.",
    description: [
      "Our weight-loss program for men pairs clinical oversight with effective, modern therapies to help you lose weight and keep it off.",
      "Personalized plans and ongoing support help you build lasting habits while improving energy, strength, and overall health.",
    ],
  },
  {
    slug: "hrt-women",
    name: "Hormone Replacement Therapy for Women",
    category: "Wellness",
    subgroup: "Hormone Therapy",
    image: unsplash("photo-1582719478250-c89cae4dc85b"),
    intro: "Restore hormonal balance for energy, mood, and well-being.",
    description: [
      "Hormonal shifts through perimenopause, menopause, and beyond can bring fatigue, mood changes, weight gain, and low drive.",
      "Our individualized hormone replacement therapy is tailored to your labs and goals, helping you feel balanced, energized, and like yourself again.",
    ],
  },
  {
    slug: "hrt-men",
    name: "Hormone Replacement Therapy for Men",
    category: "Wellness",
    subgroup: "Hormone Therapy",
    image: unsplash("photo-1522337660859-02fbefca4702"),
    intro: "Optimize hormones for energy, strength, focus, and drive.",
    description: [
      "Declining testosterone can leave men with fatigue, reduced strength, low drive, weight gain, and mental fog.",
      "Our hormone replacement programs are tailored to your labs and goals, restoring balance to support energy, strength, focus, and overall well-being.",
    ],
  },
  {
    slug: "empower",
    name: "Empower",
    category: "Wellness",
    subgroup: "Specialized Wellness",
    image: unsplash("photo-1540555700478-4be289fbecef"),
    intro: "A specialized treatment for women's intimate health and confidence.",
    description: [
      "Empower is a specialized women's wellness treatment designed to address intimate health concerns that are often overlooked.",
      "Using a comfortable, non-invasive approach, it supports renewed comfort, function, and confidence. Ask us during your consultation whether Empower is right for you.",
    ],
  },
];

// Menu / index structure. References services by slug; a slug may appear in
// more than one column or group (e.g. morpheus8, laser-hair-removal, ipl).
export const serviceMenu: ServiceMenuColumn[] = [
  {
    category: "Face",
    groups: [
      {
        label: "Injectables",
        services: [
          "forehead-lines",
          "frown-lines",
          "crows-feet",
          "brow-lift",
          "lip-flip",
          "chin-dimpling",
          "jawline-and-masseter",
          "lip-filler",
          "cheek-filler",
        ],
      },
      { label: "Sculpting", services: ["morpheus8"] },
      { label: "Laser", services: ["laser-hair-removal", "ipl"] },
    ],
  },
  {
    category: "Body",
    groups: [
      { label: "Sculpting", services: ["morpheus8", "evolve"] },
      { label: "Laser", services: ["laser-hair-removal", "ipl"] },
      { label: "Injectables", services: ["underarm-neurotoxin"] },
    ],
  },
  {
    category: "Skin",
    groups: [
      {
        label: "Facials & Peels",
        services: [
          "dermaplane-facial",
          "microdermabrasion-facial",
          "signature-facial",
          "luminate-facial",
          "retinol-plus-facial",
          "clarify-peel",
          "refine-peel",
          "transform-peel",
        ],
      },
      { label: "Microneedling & Resurfacing", services: ["morpheus8"] },
    ],
  },
  {
    category: "Wellness",
    groups: [
      {
        label: "Medical",
        services: ["weight-loss-women", "weight-loss-men", "hrt-women", "hrt-men"],
      },
      { label: "Specialized", services: ["empower"] },
    ],
  },
];

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export const getService = (slug: string): Service | undefined => serviceBySlug.get(slug);

export const servicesByCategory = (category: ServiceCategory): Service[] =>
  services.filter((service) => service.category === category);
