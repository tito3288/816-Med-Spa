// Single source of truth for the Concerns system.
// Drives the /concerns index, the /concerns/[slug] pages, and the header mega menu.

export type ConcernCategory = "Face" | "Body" | "Skin" | "Wellness";

export interface Concern {
  slug: string;
  name: string;
  category: ConcernCategory;
  image: string;
  intro: string;
  description: string[];
  treatments: string[];
}

// Display order for category columns / sections.
export const categories: ConcernCategory[] = ["Face", "Body", "Skin", "Wellness"];

// All image IDs below are verified to resolve on images.unsplash.com.
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&h=1500&q=80`;

export const concerns: Concern[] = [
  // ─── Face ──────────────────────────────────────────────────────────
  {
    slug: "fine-lines",
    name: "Fine Lines",
    category: "Face",
    image: unsplash("photo-1570172619644-dfd03ed5d881"),
    intro: "The earliest signs of expression and time, softened with a refined, natural-looking approach.",
    description: [
      "Fine lines are the shallow creases that first appear around the eyes, mouth, and forehead as skin loses collagen and elasticity. Sun exposure, repeated expressions, and the natural slowing of cell turnover all play a part.",
      "At 816 Med Spa, we smooth and prevent fine lines with treatments that relax dynamic movement and rebuild collagen from within — restoring a fresh, rested look while keeping your features your own.",
    ],
    treatments: ["Botox & Wrinkle Relaxers", "Morpheus8", "Microneedling", "Medical Facials"],
  },
  {
    slug: "wrinkles",
    name: "Wrinkles",
    category: "Face",
    image: unsplash("photo-1571019613454-1cb2f99b2d8b"),
    intro: "Deeper, set-in lines relaxed and resurfaced for smoother, more youthful skin.",
    description: [
      "Wrinkles form as years of muscle movement, collagen loss, and sun damage etch lines into the skin. Unlike fine lines, they remain visible even when the face is at rest.",
      "We address wrinkles from two directions — relaxing the muscles that deepen them and stimulating new collagen to plump and smooth the skin — for results that look refreshed rather than overdone.",
    ],
    treatments: ["Botox & Wrinkle Relaxers", "Dermal Fillers", "Morpheus8", "Laser Skin Resurfacing"],
  },
  {
    slug: "forehead-lines",
    name: "Forehead Lines",
    category: "Face",
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    intro: "Horizontal lines across the forehead eased for a smoother, calmer brow.",
    description: [
      "Forehead lines run horizontally across the brow and become more pronounced each time we raise our eyebrows. Over time, what was once a temporary crease settles into the skin.",
      "A carefully placed wrinkle relaxer softens these lines while preserving natural movement and expression, so your forehead looks smooth — never frozen.",
    ],
    treatments: ["Botox & Wrinkle Relaxers", "Morpheus8", "Microneedling"],
  },
  {
    slug: "crows-feet",
    name: "Crow's Feet",
    category: "Face",
    image: unsplash("photo-1487412947147-5cebf100ffc2"),
    intro: "The fine lines that fan from the corners of the eyes, gently smoothed.",
    description: [
      "Crow's feet are the small lines that radiate outward from the outer corners of the eyes, deepened by smiling, squinting, and sun exposure. They're often one of the first areas to show age.",
      "We soften crow's feet with precise wrinkle relaxers and collagen-building treatments that brighten the eye area while keeping your smile warm and authentic.",
    ],
    treatments: ["Botox & Wrinkle Relaxers", "Morpheus8", "Microneedling"],
  },
  {
    slug: "frown-lines",
    name: "Frown Lines",
    category: "Face",
    image: unsplash("photo-1616394584738-fc6e612e71b9"),
    intro: "The vertical '11s' between the brows relaxed for a softer, more approachable look.",
    description: [
      "Frown lines — the vertical creases between the eyebrows often called the '11s' — form from years of concentrating, squinting, and frowning. They can leave the face looking tired or tense.",
      "Relaxing the underlying muscles smooths these lines and prevents them from deepening, restoring a more rested and approachable expression.",
    ],
    treatments: ["Botox & Wrinkle Relaxers", "Dermal Fillers", "Morpheus8"],
  },
  {
    slug: "nasolabial-folds",
    name: "Nasolabial Folds",
    category: "Face",
    image: unsplash("photo-1629909613654-28e377c37b09"),
    intro: "The lines from the nose to the mouth softly restored with balanced volume.",
    description: [
      "Nasolabial folds are the lines that run from the sides of the nose to the corners of the mouth. As the cheeks lose volume with age, these folds deepen and can age the face.",
      "Strategically placed dermal fillers restore lost support to the mid-face, softening the folds naturally and lifting the area for a refreshed, harmonious result.",
    ],
    treatments: ["Dermal Fillers", "Morpheus8", "Microneedling"],
  },
  {
    slug: "marionette-lines",
    name: "Marionette Lines",
    category: "Face",
    image: unsplash("photo-1512290923902-8a9f81dc236c"),
    intro: "The lines from the mouth to the chin lifted and softened for a happier resting face.",
    description: [
      "Marionette lines extend downward from the corners of the mouth toward the chin. Volume loss and gravity can pull the mouth into a downturned, sometimes sad-looking expression.",
      "We restore structure with dermal fillers and tighten the surrounding skin, lifting the lower face and returning a more pleasant, youthful resting appearance.",
    ],
    treatments: ["Dermal Fillers", "Morpheus8", "FaceTite"],
  },
  {
    slug: "volume-loss-in-cheeks",
    name: "Volume Loss in Cheeks",
    category: "Face",
    image: unsplash("photo-1515377905703-c4788e51af15"),
    intro: "Flattened, hollow cheeks re-contoured for natural lift and definition.",
    description: [
      "The cheeks are often the first area to lose volume as facial fat pads shrink and descend with age. This flattening can make the face look tired and accentuate the lines below.",
      "Restoring cheek volume with dermal fillers re-establishes youthful contour and lift — subtly supporting the entire mid-face for a refreshed, balanced look.",
    ],
    treatments: ["Dermal Fillers", "Morpheus8"],
  },
  {
    slug: "hollow-under-eyes",
    name: "Hollow Under-Eyes",
    category: "Face",
    image: unsplash("photo-1596178060810-72f53ce9a65c"),
    intro: "Tired, shadowed under-eyes brightened and smoothed for a well-rested look.",
    description: [
      "Hollow under-eyes, or tear troughs, create shadows and a tired appearance even after a full night's sleep. They develop as volume diminishes and skin thins around the delicate eye area.",
      "With a refined, conservative filler technique, we restore subtle volume to soften hollows and shadows — opening and brightening the eyes naturally.",
    ],
    treatments: ["Dermal Fillers", "Microneedling", "Morpheus8"],
  },
  {
    slug: "double-chin",
    name: "Double Chin",
    category: "Face",
    image: unsplash("photo-1598440947619-2c35fc9aa908"),
    intro: "Submental fullness contoured for a sleeker, more defined jawline.",
    description: [
      "A double chin — fullness beneath the jaw — can be stubborn and resistant to diet and exercise, often due to genetics or age-related skin laxity.",
      "We sculpt and tighten the area with skin-firming and contouring treatments, refining the jawline and restoring definition to the lower face and neck.",
    ],
    treatments: ["Morpheus8", "FaceTite", "Medical Weight Loss"],
  },

  // ─── Body ──────────────────────────────────────────────────────────
  {
    slug: "cellulite",
    name: "Cellulite",
    category: "Body",
    image: unsplash("photo-1556228578-8c89e6adf883"),
    intro: "Dimpled skin on the thighs and hips smoothed for a firmer texture.",
    description: [
      "Cellulite is the dimpled, uneven texture that appears most often on the thighs, hips, and buttocks. It forms when fat pushes against connective tissue beneath the skin and affects people of every body type.",
      "Our skin-tightening and collagen-stimulating treatments improve firmness and smooth the surface, reducing the appearance of dimpling over time.",
    ],
    treatments: ["Morpheus8", "Body Contouring"],
  },
  {
    slug: "stubborn-fat",
    name: "Stubborn Fat",
    category: "Body",
    image: unsplash("photo-1570554886111-e80fcca6a029"),
    intro: "Diet- and exercise-resistant pockets of fat targeted and reduced.",
    description: [
      "Stubborn fat refers to localized pockets — the abdomen, flanks, thighs, or arms — that persist despite a healthy diet and consistent exercise.",
      "We combine medical weight-loss support with body-contouring treatments to target these areas, helping you reach a more sculpted shape that lasts.",
    ],
    treatments: ["Medical Weight Loss", "Body Contouring", "Morpheus8"],
  },
  {
    slug: "weak-core-muscles",
    name: "Weak Core Muscles",
    category: "Body",
    image: unsplash("photo-1612817288484-6f916006741a"),
    intro: "Lost core strength and tone supported through targeted body treatments.",
    description: [
      "A weak core can follow pregnancy, weight changes, or simply time, affecting posture, definition, and confidence in how the midsection looks and feels.",
      "Through body-contouring and muscle-supporting therapies paired with wellness guidance, we help restore tone and definition to the core.",
    ],
    treatments: ["Body Contouring", "Medical Weight Loss"],
  },
  {
    slug: "spider-veins",
    name: "Spider Veins",
    category: "Body",
    image: unsplash("photo-1601049541289-9b1b7bbbfe19"),
    intro: "Fine, visible veins on the face and legs diminished for clearer skin.",
    description: [
      "Spider veins are small, web-like clusters of red or blue veins that appear on the legs and face. They're caused by weakened vessels and are influenced by genetics, hormones, and sun exposure.",
      "Targeted laser and light-based treatments gently collapse these vessels, fading their appearance and revealing clearer, more even-toned skin.",
    ],
    treatments: ["Laser Skin Resurfacing", "Medical Facials"],
  },
  {
    slug: "postpartum-body",
    name: "Postpartum Body",
    category: "Body",
    image: unsplash("photo-1607779097040-26e80aa78e66"),
    intro: "Comprehensive, compassionate support to help you feel like yourself again.",
    description: [
      "Pregnancy transforms the body in remarkable ways, and the postpartum period can leave lingering changes — loose skin, stubborn fat, and shifts in tone and energy.",
      "We build personalized plans that combine skin tightening, body contouring, and wellness support to help you restore confidence at a pace that feels right for you.",
    ],
    treatments: ["Morpheus8", "Body Contouring", "Medical Weight Loss", "Hormone Replacement Therapy"],
  },
  {
    slug: "muscle-tone-loss",
    name: "Muscle Tone Loss",
    category: "Body",
    image: unsplash("photo-1620916566398-39f1143ab7be"),
    intro: "Softening definition firmed and restored for a more sculpted shape.",
    description: [
      "Muscle tone naturally declines with age, hormonal change, and reduced activity, leaving areas of the body looking softer and less defined.",
      "Our body and wellness treatments work to rebuild tone and firmness, supporting a stronger, more sculpted appearance.",
    ],
    treatments: ["Body Contouring", "Medical Weight Loss", "Hormone Replacement Therapy"],
  },
  {
    slug: "unwanted-and-excess-hair",
    name: "Unwanted and Excess Hair",
    category: "Body",
    image: unsplash("photo-1559599101-f09722fb4948"),
    intro: "Smooth, hair-free skin with lasting laser hair removal.",
    description: [
      "Unwanted hair on the face, underarms, legs, bikini area, and beyond can be tedious to manage with shaving, waxing, and plucking.",
      "Laser hair removal targets the follicle to reduce hair growth long-term, leaving skin smooth and low-maintenance with a series of comfortable sessions.",
    ],
    treatments: ["Laser Hair Removal"],
  },

  // ─── Skin ──────────────────────────────────────────────────────────
  {
    slug: "skin-laxity",
    name: "Skin Laxity",
    category: "Skin",
    image: unsplash("photo-1552693673-1bf958298935"),
    intro: "Loose, sagging skin firmed and lifted by rebuilding collagen.",
    description: [
      "Skin laxity — looseness and sagging — develops as collagen and elastin production slows with age, often appearing on the face, neck, and body.",
      "Collagen-stimulating treatments like Morpheus8 and radiofrequency tightening firm and lift the skin from within, restoring a more youthful structure over time.",
    ],
    treatments: ["Morpheus8", "FaceTite", "Microneedling"],
  },
  {
    slug: "hyperpigmentation",
    name: "Hyperpigmentation",
    category: "Skin",
    image: unsplash("photo-1532413992378-f169ac26fff0"),
    intro: "Dark spots and uneven tone faded for brighter, more even skin.",
    description: [
      "Hyperpigmentation appears as dark patches or spots when the skin produces excess melanin, often triggered by sun exposure, inflammation, or hormones.",
      "We brighten and even tone with resurfacing treatments, chemical peels, and medical-grade skincare that fade discoloration and reveal clearer skin.",
    ],
    treatments: ["Chemical Peel", "Laser Skin Resurfacing", "Microneedling", "Medical Facials"],
  },
  {
    slug: "sun-damage",
    name: "Sun Damage",
    category: "Skin",
    image: unsplash("photo-1583001931096-959e9a1a6223"),
    intro: "Years of sun exposure reversed for healthier, more radiant skin.",
    description: [
      "Sun damage accumulates over years, leaving behind dark spots, rough texture, broken vessels, and premature lines — even when the skin looked fine at the time.",
      "Resurfacing and brightening treatments repair the visible signs of sun damage and encourage healthy new skin, restoring a clearer, more radiant complexion.",
    ],
    treatments: ["Laser Skin Resurfacing", "Chemical Peel", "Morpheus8", "Medical Facials"],
  },
  {
    slug: "redness-and-rosacea",
    name: "Redness and Rosacea",
    category: "Skin",
    image: unsplash("photo-1519824145371-296894a0daa9"),
    intro: "Persistent facial redness calmed for a more even, comfortable complexion.",
    description: [
      "Rosacea and chronic redness cause flushing, visible vessels, and sensitivity, most often across the cheeks, nose, and forehead. Flare-ups can be triggered by heat, stress, and certain foods.",
      "Gentle laser and light therapies reduce redness and visible vessels, while a tailored skincare plan helps calm and protect reactive skin.",
    ],
    treatments: ["Laser Skin Resurfacing", "Medical Facials"],
  },
  {
    slug: "acne",
    name: "Acne",
    category: "Skin",
    image: unsplash("photo-1505944270255-72b8c68c6a70"),
    intro: "Active breakouts cleared and prevented for calmer, clearer skin.",
    description: [
      "Acne occurs when pores become clogged with oil and dead skin, leading to breakouts that can affect the face, back, and chest at any age.",
      "We treat active acne and its causes with medical facials, chemical peels, and customized skincare that clear breakouts and help keep them from returning.",
    ],
    treatments: ["Chemical Peel", "Medical Facials", "Microneedling"],
  },
  {
    slug: "acne-scars",
    name: "Acne Scars",
    category: "Skin",
    image: unsplash("photo-1576091160550-2173dba999ef"),
    intro: "Pitted and discolored acne scarring smoothed and resurfaced.",
    description: [
      "Acne scars — whether pitted, raised, or discolored — can remain long after breakouts heal, leaving uneven texture and tone.",
      "Collagen-induction treatments like microneedling and Morpheus8 remodel scarred tissue and smooth the skin's surface for a more even, refined complexion.",
    ],
    treatments: ["Morpheus8", "Microneedling", "Laser Skin Resurfacing", "Chemical Peel"],
  },
  {
    slug: "enlarged-pores",
    name: "Enlarged Pores",
    category: "Skin",
    image: unsplash("photo-1542848284-8afa78a08ccb"),
    intro: "Visibly large pores refined for smoother-looking skin.",
    description: [
      "Enlarged pores become more noticeable with excess oil, sun damage, and the natural loss of firmness that keeps pores tight.",
      "Resurfacing and collagen-building treatments refine pore appearance and improve overall texture for smoother, healthier-looking skin.",
    ],
    treatments: ["Microneedling", "Chemical Peel", "Morpheus8", "Medical Facials"],
  },
  {
    slug: "dull-skin",
    name: "Dull Skin",
    category: "Skin",
    image: unsplash("photo-1620331311520-246422fd82f9"),
    intro: "Tired, lackluster skin revived to a fresh, healthy glow.",
    description: [
      "Dull skin lacks radiance, often from a buildup of dead skin cells, dehydration, and slowed cell turnover. The result is a tired, uneven appearance.",
      "Exfoliating facials, peels, and resurfacing treatments sweep away dullness and reveal the brighter, glowing skin underneath.",
    ],
    treatments: ["Chemical Peel", "Medical Facials", "Microneedling"],
  },
  {
    slug: "dehydrated-skin",
    name: "Dehydrated Skin",
    category: "Skin",
    image: unsplash("photo-1610992015732-2449b76344bc"),
    intro: "Thirsty, tight-feeling skin replenished and restored.",
    description: [
      "Dehydrated skin lacks water — not necessarily oil — leaving it feeling tight, looking dull, and showing fine lines more readily. Any skin type can be dehydrated.",
      "We replenish and rebuild the skin barrier with hydrating treatments and medical-grade skincare, restoring softness, bounce, and a healthy glow.",
    ],
    treatments: ["Medical Facials", "Microneedling"],
  },
  {
    slug: "oily-skin",
    name: "Oily Skin",
    category: "Skin",
    image: unsplash("photo-1502323777036-f29e3972d82f"),
    intro: "Excess shine and oil balanced for a clearer, matte-fresh complexion.",
    description: [
      "Oily skin produces excess sebum, which can lead to shine, clogged pores, and frequent breakouts. Genetics and hormones often play a role.",
      "Balancing facials, peels, and a targeted skincare routine help regulate oil and refine the skin for a clearer, healthier finish.",
    ],
    treatments: ["Chemical Peel", "Medical Facials", "Microneedling"],
  },
  {
    slug: "melasma",
    name: "Melasma",
    category: "Skin",
    image: unsplash("photo-1526045478516-99145907023c"),
    intro: "Hormone-related brown patches gently lightened and managed.",
    description: [
      "Melasma causes symmetrical brown or gray-brown patches, usually on the cheeks, forehead, and upper lip. It's often driven by hormones and worsened by sun exposure.",
      "Melasma requires a careful, customized approach — gentle resurfacing, brightening skincare, and diligent sun protection — to lighten patches and keep them under control.",
    ],
    treatments: ["Chemical Peel", "Medical Facials", "Microneedling"],
  },
  {
    slug: "stretch-marks",
    name: "Stretch Marks",
    category: "Skin",
    image: unsplash("photo-1519415943484-9fa1873496d4"),
    intro: "Textured stretch marks softened and blended into the surrounding skin.",
    description: [
      "Stretch marks appear when skin stretches rapidly during growth, pregnancy, or weight change, leaving streaks of altered texture and color.",
      "Microneedling and collagen-building treatments remodel the affected skin, improving texture and helping marks blend more seamlessly over time.",
    ],
    treatments: ["Morpheus8", "Microneedling"],
  },
  {
    slug: "broken-capillaries",
    name: "Broken Capillaries",
    category: "Skin",
    image: unsplash("photo-1498843053639-170ff2122f35"),
    intro: "Visible facial capillaries diminished for clearer, even-toned skin.",
    description: [
      "Broken capillaries are small, visible blood vessels — often around the nose and cheeks — caused by sun damage, genetics, and skin sensitivity.",
      "Laser and light-based treatments target and fade these vessels, restoring a clearer, more uniform complexion.",
    ],
    treatments: ["Laser Skin Resurfacing", "Medical Facials"],
  },
  {
    slug: "skin-texture-irregularities",
    name: "Skin Texture Irregularities",
    category: "Skin",
    image: unsplash("photo-1487070183336-b863922373d4"),
    intro: "Rough, uneven texture resurfaced to a smooth, polished finish.",
    description: [
      "Uneven texture — roughness, bumps, and an irregular surface — can result from sun damage, scarring, congestion, and the natural slowing of cell turnover.",
      "Resurfacing and collagen-stimulating treatments smooth and refine the skin's surface for a softer, more polished feel and finish.",
    ],
    treatments: ["Microneedling", "Chemical Peel", "Morpheus8", "Laser Skin Resurfacing"],
  },
  {
    slug: "skin-aging",
    name: "Skin Aging",
    category: "Skin",
    image: unsplash("photo-1525909002-1b05e0c869d8"),
    intro: "The combined signs of aging addressed with a comprehensive, tailored plan.",
    description: [
      "Aging skin shows a combination of changes — lines, volume loss, laxity, dullness, and uneven tone — as collagen, elastin, and hydration naturally decline.",
      "We design comprehensive plans that combine relaxers, fillers, resurfacing, and skin tightening to address the full picture and restore a refreshed, youthful look.",
    ],
    treatments: ["Morpheus8", "Botox & Wrinkle Relaxers", "Dermal Fillers", "Microneedling"],
  },

  // ─── Wellness ──────────────────────────────────────────────────────
  {
    slug: "weight-gain",
    name: "Weight Gain",
    category: "Wellness",
    image: unsplash("photo-1556760544-74068565f05c"),
    intro: "Stubborn weight addressed with medically guided, sustainable programs.",
    description: [
      "Unwanted weight gain can stem from hormones, metabolism, stress, and lifestyle — and it often resists diet and exercise alone.",
      "Our medical weight-loss programs combine clinical guidance, modern therapies, and personalized support to help you reach and maintain a healthy weight.",
    ],
    treatments: ["Medical Weight Loss", "Hormone Replacement Therapy", "Peptide Therapy"],
  },
  {
    slug: "hair-loss",
    name: "Hair Loss",
    category: "Wellness",
    image: unsplash("photo-1540555700478-4be289fbecef"),
    intro: "Thinning hair supported with regenerative, restorative therapies.",
    description: [
      "Hair thinning and loss affect both men and women and can be driven by genetics, hormones, stress, and nutrition.",
      "We offer regenerative and wellness-based therapies that support healthier, fuller hair growth as part of a personalized plan.",
    ],
    treatments: ["Peptide Therapy", "Hormone Replacement Therapy", "IV Wellness Therapy"],
  },
  {
    slug: "low-energy",
    name: "Low Energy",
    category: "Wellness",
    image: unsplash("photo-1522337660859-02fbefca4702"),
    intro: "Persistent fatigue addressed at the source for renewed vitality.",
    description: [
      "Ongoing low energy and fatigue can signal hormonal imbalance, nutrient deficiency, or the cumulative toll of stress and poor sleep.",
      "Through hormone optimization, IV wellness therapy, and personalized guidance, we help restore the energy and vitality to feel like yourself again.",
    ],
    treatments: ["Hormone Replacement Therapy", "IV Wellness Therapy", "Peptide Therapy"],
  },
  {
    slug: "mens-hormone-balancing",
    name: "Men's Hormone Balancing",
    category: "Wellness",
    image: unsplash("photo-1512496015851-a90fb38ba796"),
    intro: "Optimized hormones for energy, strength, focus, and well-being in men.",
    description: [
      "Declining testosterone and shifting hormones can leave men with fatigue, reduced strength, low drive, weight gain, and mental fog.",
      "Our hormone replacement programs are tailored to your labs and goals, restoring balance to support energy, strength, focus, and overall well-being.",
    ],
    treatments: ["Hormone Replacement Therapy", "Peptide Therapy", "Medical Weight Loss"],
  },
  {
    slug: "womens-hormone-balancing",
    name: "Women's Hormone Balancing",
    category: "Wellness",
    image: unsplash("photo-1582719478250-c89cae4dc85b"),
    intro: "Balanced hormones for mood, energy, and well-being through every stage.",
    description: [
      "Hormonal shifts through perimenopause, menopause, and beyond can bring fatigue, mood changes, weight gain, sleep issues, and low drive.",
      "We create individualized hormone therapy plans that restore balance and help you feel steady, energized, and supported through every stage of life.",
    ],
    treatments: ["Hormone Replacement Therapy", "Peptide Therapy", "Medical Weight Loss"],
  },
  {
    slug: "low-sex-drive",
    name: "Low Sex Drive",
    category: "Wellness",
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    intro: "Diminished libido addressed through hormone and wellness optimization.",
    description: [
      "A low sex drive in men or women is often rooted in hormonal imbalance, stress, fatigue, or life stage — and it's more common than most people realize.",
      "By restoring hormonal balance and supporting overall wellness, we help reignite libido, intimacy, and confidence through discreet, personalized care.",
    ],
    treatments: ["Hormone Replacement Therapy", "Peptide Therapy"],
  },
];

export const concernsByCategory = (category: ConcernCategory): Concern[] =>
  concerns.filter((concern) => concern.category === category);
