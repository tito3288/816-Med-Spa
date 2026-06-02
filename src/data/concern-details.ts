// Extended, per-concern content for the /concerns/[slug] pages.
// Keyed by the same slug as src/data/concerns.ts (kept separate so the core
// data file stays lean and this richer copy can evolve independently).

export interface ConcernFaq {
  q: string;
  a: string;
}

export interface ConcernDetail {
  signs: string[];
  causes: string[];
  faqs: ConcernFaq[];
}

export const concernDetails: Record<string, ConcernDetail> = {
  // ─── Face ──────────────────────────────────────────────────────────
  "fine-lines": {
    signs: [
      "Shallow lines around the eyes, mouth, and forehead",
      "Creases that show when you smile or squint",
      "Skin that looks less smooth in natural light",
      "Makeup beginning to settle into small lines",
    ],
    causes: [
      "Gradual loss of collagen and elastin",
      "Years of repeated facial expressions",
      "Sun exposure and free-radical damage",
      "Dehydration and slower cell turnover",
    ],
    faqs: [
      {
        q: "What's the best treatment for fine lines?",
        a: "It depends on their depth and cause. Neurotoxin softens expression lines, while microneedling and Morpheus8 rebuild collagen to smooth and prevent them. We'll tailor a plan at your consultation.",
      },
      {
        q: "Can fine lines be prevented?",
        a: "Yes — daily SPF, medical-grade skincare, and early, conservative treatments can slow their development significantly.",
      },
    ],
  },
  wrinkles: {
    signs: [
      "Lines that remain visible when your face is at rest",
      "Deeper folds across the forehead or around the mouth",
      "Skin that looks creased or less firm",
      "Shadows forming along set-in lines",
    ],
    causes: [
      "Long-term collagen and elastin loss",
      "Cumulative sun damage",
      "Repeated muscle movement over decades",
      "Smoking, stress, and lifestyle factors",
    ],
    faqs: [
      {
        q: "What's the difference between fine lines and wrinkles?",
        a: "Fine lines are shallow and often appear with movement; wrinkles are deeper and stay visible at rest. Wrinkles usually benefit from a combination approach.",
      },
      {
        q: "Do I need surgery for deep wrinkles?",
        a: "Often not. Combining wrinkle relaxers, dermal fillers, and skin-tightening treatments can dramatically smooth deep lines without surgery.",
      },
    ],
  },
  "forehead-lines": {
    signs: [
      "Horizontal lines across the forehead",
      "Lines that deepen when you raise your eyebrows",
      "Creases visible even at rest",
      "A tired or worried-looking appearance",
    ],
    causes: [
      "Repeatedly raising the eyebrows",
      "Natural collagen loss with age",
      "Sun exposure",
      "Genetics and skin type",
    ],
    faqs: [
      {
        q: "How quickly will I see results?",
        a: "Neurotoxin results begin appearing within a few days and are fully visible about two weeks after treatment.",
      },
      {
        q: "Will I still be able to make expressions?",
        a: "Yes. We dose carefully so your forehead looks smoother while keeping natural movement.",
      },
    ],
  },
  "crows-feet": {
    signs: [
      "Fine lines fanning from the outer corners of the eyes",
      "Lines that deepen when you smile",
      "Crinkling skin around the eyes",
      "An aged or tired look around the eyes",
    ],
    causes: [
      "Smiling and squinting over time",
      "Thin, delicate skin around the eyes",
      "Sun exposure",
      "Loss of collagen and elasticity",
    ],
    faqs: [
      {
        q: "Is treatment around the eyes safe?",
        a: "Yes. Crow's feet are one of the most common and well-established areas for neurotoxin treatment when performed by a trained injector.",
      },
      {
        q: "How long do results last?",
        a: "Most clients enjoy smoother results for three to four months before a maintenance treatment.",
      },
    ],
  },
  "frown-lines": {
    signs: [
      "Vertical lines between the eyebrows (the '11s')",
      "Lines that appear when you concentrate or frown",
      "A stern, angry, or tired resting expression",
      "Creases visible without any movement",
    ],
    causes: [
      "Repeated frowning and squinting",
      "Collagen loss with age",
      "Sun damage",
      "Genetic muscle strength and skin type",
    ],
    faqs: [
      {
        q: "Why do my frown lines make me look angry?",
        a: "The muscles between the brows pull inward, etching vertical lines that can read as tension or anger. Relaxing them softens that resting expression.",
      },
      {
        q: "How many units will I need?",
        a: "It varies by muscle strength and goals. We'll assess and recommend a personalized amount at your visit.",
      },
    ],
  },
  "nasolabial-folds": {
    signs: [
      "Lines running from the nose to the corners of the mouth",
      "Folds that deepen when smiling",
      "A heavier or aged-looking mid-face",
      "Loss of cheek fullness above the folds",
    ],
    causes: [
      "Age-related volume loss in the cheeks",
      "Gravity and descending facial fat",
      "Collagen and elastin decline",
      "Genetics and facial structure",
    ],
    faqs: [
      {
        q: "Is filler the only option?",
        a: "Filler is the most direct way to soften these folds by restoring support, but skin-tightening treatments can help too. We often combine approaches.",
      },
      {
        q: "Will it look natural?",
        a: "Yes — strategic placement restores youthful support without overfilling, for a balanced, natural result.",
      },
    ],
  },
  "marionette-lines": {
    signs: [
      "Lines from the corners of the mouth toward the chin",
      "A downturned or sad resting expression",
      "Sagging along the lower face",
      "Folds that deepen with age",
    ],
    causes: [
      "Loss of volume and skin laxity",
      "Gravity pulling the lower face down",
      "Collagen decline",
      "Repeated mouth movement",
    ],
    faqs: [
      {
        q: "Can marionette lines be fully erased?",
        a: "Results vary, but dermal filler and skin tightening can dramatically soften them and lift the lower face for a happier resting look.",
      },
      {
        q: "How long do filler results last?",
        a: "Most hyaluronic acid fillers in this area last 9–18 months depending on the product and your metabolism.",
      },
    ],
  },
  "volume-loss-in-cheeks": {
    signs: [
      "Flatter, less defined cheeks",
      "A tired or gaunt appearance",
      "Deeper lines below the cheeks",
      "Loss of youthful lift in the mid-face",
    ],
    causes: [
      "Shrinking and descending facial fat pads",
      "Bone and collagen loss with age",
      "Genetics",
      "Significant weight loss",
    ],
    faqs: [
      {
        q: "Will cheek filler look overdone?",
        a: "Not with a conservative, structured approach. Restoring cheek support actually creates a natural lift that softens the whole face.",
      },
      {
        q: "How much filler will I need?",
        a: "It depends on the degree of volume loss and your goals — we'll recommend an amount during your assessment.",
      },
    ],
  },
  "hollow-under-eyes": {
    signs: [
      "Shadows or dark circles under the eyes",
      "A tired look despite adequate sleep",
      "A hollow or sunken under-eye area",
      "Fine lines or crepey skin beneath the eyes",
    ],
    causes: [
      "Volume loss in the tear trough",
      "Thinning skin with age",
      "Genetics",
      "Fatigue and dehydration",
    ],
    faqs: [
      {
        q: "Is under-eye filler risky?",
        a: "The under-eye is a delicate area that requires expertise. When treated conservatively by a trained injector, it can beautifully brighten the eyes.",
      },
      {
        q: "Will it remove my dark circles?",
        a: "If shadows come from hollowing, filler can significantly reduce them. Pigment-based circles may also need skincare or other treatments.",
      },
    ],
  },
  "double-chin": {
    signs: [
      "Fullness or a 'pocket' beneath the chin",
      "A less defined jawline",
      "Submental fullness in photos",
      "Looseness under the jaw",
    ],
    causes: [
      "Genetics and fat distribution",
      "Age-related skin laxity",
      "Weight changes",
      "Posture and bone structure",
    ],
    faqs: [
      {
        q: "Do I need surgery to fix a double chin?",
        a: "Often not. Skin-tightening and contouring treatments like Morpheus8 and FaceTite can refine the area without surgery.",
      },
      {
        q: "Will the results last?",
        a: "With a stable weight, results from skin-tightening and contouring treatments are long-lasting.",
      },
    ],
  },

  // ─── Body ──────────────────────────────────────────────────────────
  cellulite: {
    signs: [
      "Dimpled, 'orange-peel' skin texture",
      "Lumpy or uneven skin on thighs, hips, or buttocks",
      "More noticeable dimpling when pinching the skin",
      "Texture that's visible in certain lighting",
    ],
    causes: [
      "Fat pushing against connective tissue bands",
      "Genetics and hormones",
      "Decreased skin firmness with age",
      "Circulation and lifestyle factors",
    ],
    faqs: [
      {
        q: "Does cellulite mean I'm overweight?",
        a: "No — cellulite affects people of every body type and weight. It's about skin structure, not just fat.",
      },
      {
        q: "Will treatment get rid of it completely?",
        a: "Cellulite is difficult to eliminate entirely, but skin-tightening treatments can noticeably smooth texture and improve firmness over time.",
      },
    ],
  },
  "stubborn-fat": {
    signs: [
      "Pockets of fat that won't budge with diet or exercise",
      "Fullness in the abdomen, flanks, thighs, or arms",
      "A shape that doesn't match your effort",
      "Areas that feel disproportionate",
    ],
    causes: [
      "Genetics and fat-cell distribution",
      "Hormonal influences",
      "Age and slowing metabolism",
      "Lifestyle factors",
    ],
    faqs: [
      {
        q: "Why won't this fat go away with exercise?",
        a: "Some fat deposits are genetically resistant to diet and exercise. Targeted treatments and medical weight loss can help address them.",
      },
      {
        q: "What's the best approach?",
        a: "It depends on the area and amount. We often combine medical weight loss with body-contouring treatments for the best result.",
      },
    ],
  },
  "weak-core-muscles": {
    signs: [
      "Reduced tone or definition in the midsection",
      "A looser feeling in the abdominal area",
      "Changes after pregnancy or weight loss",
      "Less strength or stability in the core",
    ],
    causes: [
      "Pregnancy and abdominal separation",
      "Weight fluctuations",
      "Aging and reduced activity",
      "Loss of muscle mass over time",
    ],
    faqs: [
      {
        q: "Can treatments really tone muscle?",
        a: "Body-contouring technologies can support firmness and tone, and we pair them with wellness guidance for the best outcome.",
      },
      {
        q: "Is this a replacement for exercise?",
        a: "No — these treatments complement a healthy, active lifestyle rather than replace it.",
      },
    ],
  },
  "spider-veins": {
    signs: [
      "Small red, blue, or purple veins near the surface",
      "Web-like clusters on the legs or face",
      "Visible veins around the nose or cheeks",
      "Veins that become more noticeable over time",
    ],
    causes: [
      "Weakened or damaged blood vessels",
      "Genetics",
      "Hormonal changes",
      "Sun exposure and prolonged standing",
    ],
    faqs: [
      {
        q: "Are spider veins dangerous?",
        a: "They're usually a cosmetic concern rather than a medical one, though we're happy to discuss your specific situation.",
      },
      {
        q: "How many treatments will I need?",
        a: "It depends on the extent of the veins. Many clients see meaningful improvement within a few sessions.",
      },
    ],
  },
  "postpartum-body": {
    signs: [
      "Loose or stretched abdominal skin",
      "Stubborn fat that lingers after pregnancy",
      "Changes in skin tone and firmness",
      "Lower energy or hormonal shifts",
    ],
    causes: [
      "Skin and muscle stretching during pregnancy",
      "Hormonal changes",
      "Weight fluctuations",
      "The natural recovery process",
    ],
    faqs: [
      {
        q: "When can I start treatments after giving birth?",
        a: "Timing depends on your recovery and whether you're breastfeeding. We'll create a safe, personalized plan during your consultation.",
      },
      {
        q: "Can you address several concerns at once?",
        a: "Yes — we build comprehensive plans that combine skin tightening, body contouring, and wellness support at a comfortable pace.",
      },
    ],
  },
  "muscle-tone-loss": {
    signs: [
      "Softer, less defined arms, legs, or midsection",
      "Loss of firmness despite activity",
      "A less sculpted overall shape",
      "Changes in body composition with age",
    ],
    causes: [
      "Natural muscle loss with age",
      "Hormonal changes",
      "Reduced activity levels",
      "Weight fluctuations",
    ],
    faqs: [
      {
        q: "What causes muscle tone to fade?",
        a: "Muscle mass naturally declines with age and hormonal shifts. Contouring treatments and wellness support can help restore firmness.",
      },
      {
        q: "Will hormone therapy help?",
        a: "For some clients, balancing hormones supports strength and body composition. We'll assess whether it's right for you.",
      },
    ],
  },
  "unwanted-and-excess-hair": {
    signs: [
      "Unwanted hair on the face, body, or bikini area",
      "Frequent shaving, waxing, or plucking",
      "Ingrown hairs or irritation from hair removal",
      "Hair regrowth that feels relentless",
    ],
    causes: [
      "Genetics",
      "Hormonal influences",
      "Ethnicity and hair type",
      "Certain medications or conditions",
    ],
    faqs: [
      {
        q: "Is laser hair removal permanent?",
        a: "It provides long-term reduction. Most clients need a series of sessions and occasional maintenance for lasting smoothness.",
      },
      {
        q: "Does it work on all skin tones?",
        a: "Modern lasers are effective for many skin tones and hair types. We'll confirm suitability at your consultation.",
      },
    ],
  },

  // ─── Skin ──────────────────────────────────────────────────────────
  "skin-laxity": {
    signs: [
      "Loose or sagging skin on the face, neck, or body",
      "Less firmness and 'bounce'",
      "Jowls or a softening jawline",
      "Crepey texture",
    ],
    causes: [
      "Declining collagen and elastin",
      "Aging and gravity",
      "Sun damage",
      "Significant weight loss",
    ],
    faqs: [
      {
        q: "Can skin tightening replace a facelift?",
        a: "For mild to moderate laxity, non-surgical tightening like Morpheus8 offers impressive results. Significant sagging may still need surgical options.",
      },
      {
        q: "When will I see results?",
        a: "Skin continues to firm as new collagen forms, with results building over several weeks to months.",
      },
    ],
  },
  hyperpigmentation: {
    signs: [
      "Dark spots or patches on the skin",
      "Uneven skin tone",
      "Discoloration after breakouts or injury",
      "Areas that darken with sun exposure",
    ],
    causes: [
      "Excess melanin production",
      "Sun exposure",
      "Inflammation or acne",
      "Hormonal changes",
    ],
    faqs: [
      {
        q: "What treatments fade dark spots?",
        a: "Chemical peels, IPL, resurfacing, and medical-grade skincare all help. The best choice depends on the type and depth of pigmentation.",
      },
      {
        q: "Will the spots come back?",
        a: "Diligent sun protection is essential to maintain results and prevent new discoloration.",
      },
    ],
  },
  "sun-damage": {
    signs: [
      "Dark spots and uneven tone",
      "Rough or leathery texture",
      "Broken capillaries or redness",
      "Premature lines and wrinkles",
    ],
    causes: [
      "Cumulative UV exposure",
      "History of sunburns or tanning",
      "Insufficient sun protection",
      "Environmental exposure",
    ],
    faqs: [
      {
        q: "Can sun damage be reversed?",
        a: "Many visible signs can be significantly improved with resurfacing, IPL, and brightening treatments that encourage healthy new skin.",
      },
      {
        q: "How do I prevent more damage?",
        a: "Daily broad-spectrum SPF and antioxidant skincare are the foundation of protecting your results.",
      },
    ],
  },
  "redness-and-rosacea": {
    signs: [
      "Persistent facial flushing or redness",
      "Visible blood vessels",
      "Sensitivity, stinging, or burning",
      "Acne-like bumps in some cases",
    ],
    causes: [
      "Genetics",
      "Reactive blood vessels",
      "Triggers like heat, stress, alcohol, or spicy food",
      "Sun exposure",
    ],
    faqs: [
      {
        q: "Can rosacea be cured?",
        a: "Rosacea is managed rather than cured. Laser and light therapies plus a calming skincare plan can dramatically reduce redness and flare-ups.",
      },
      {
        q: "What should I avoid?",
        a: "Common triggers include heat, sun, alcohol, and harsh products. We'll help you identify and manage yours.",
      },
    ],
  },
  acne: {
    signs: [
      "Pimples, whiteheads, or blackheads",
      "Congested or oily skin",
      "Breakouts on the face, back, or chest",
      "Redness and inflammation",
    ],
    causes: [
      "Clogged pores from oil and dead skin",
      "Hormonal fluctuations",
      "Bacteria and inflammation",
      "Genetics and skincare habits",
    ],
    faqs: [
      {
        q: "Are spa treatments enough for acne?",
        a: "Medical facials, peels, and customized skincare clear and prevent many cases. Severe or cystic acne may also need medical management.",
      },
      {
        q: "How long until I see clearer skin?",
        a: "Many clients notice improvement within a few weeks, with continued progress over a treatment series.",
      },
    ],
  },
  "acne-scars": {
    signs: [
      "Pitted or indented scars",
      "Raised or textured scar tissue",
      "Dark marks left after breakouts",
      "An uneven skin surface",
    ],
    causes: [
      "Inflammation from deep or cystic acne",
      "Picking or squeezing breakouts",
      "Delayed acne treatment",
      "Genetics and skin healing",
    ],
    faqs: [
      {
        q: "Can acne scars be fully removed?",
        a: "While complete removal is rare, microneedling and Morpheus8 can dramatically smooth texture and improve the appearance of scarring.",
      },
      {
        q: "How many sessions will I need?",
        a: "A series of treatments usually produces the best results, with improvement building over time.",
      },
    ],
  },
  "enlarged-pores": {
    signs: [
      "Visibly large pores, often on the nose and cheeks",
      "Skin that looks textured or uneven",
      "Pores that appear more obvious with oil",
      "Congestion within the pores",
    ],
    causes: [
      "Excess oil production",
      "Loss of skin firmness with age",
      "Sun damage",
      "Genetics",
    ],
    faqs: [
      {
        q: "Can pore size really be reduced?",
        a: "Pores can't be 'closed,' but resurfacing and collagen-building treatments refine their appearance for smoother-looking skin.",
      },
      {
        q: "What helps day to day?",
        a: "Consistent exfoliation, retinoids, and a tailored skincare routine help keep pores clear and minimized.",
      },
    ],
  },
  "dull-skin": {
    signs: [
      "A tired, lackluster complexion",
      "Loss of natural glow",
      "Uneven or rough texture",
      "Skin that looks 'flat' in photos",
    ],
    causes: [
      "Buildup of dead skin cells",
      "Dehydration",
      "Slowed cell turnover",
      "Stress, sleep, and lifestyle",
    ],
    faqs: [
      {
        q: "What's the fastest way to restore glow?",
        a: "Exfoliating facials and peels deliver an immediate brightening effect, while a consistent routine maintains it.",
      },
      {
        q: "How often should I get facials?",
        a: "Many clients benefit from a facial every four to six weeks to maintain radiant skin.",
      },
    ],
  },
  "dehydrated-skin": {
    signs: [
      "Tight, uncomfortable-feeling skin",
      "Dullness and more visible fine lines",
      "Flaky or rough patches",
      "Skin that absorbs moisturizer quickly",
    ],
    causes: [
      "A compromised skin barrier",
      "Weather and low humidity",
      "Over-exfoliation or harsh products",
      "Insufficient water intake",
    ],
    faqs: [
      {
        q: "What's the difference between dry and dehydrated skin?",
        a: "Dry skin lacks oil; dehydrated skin lacks water. Any skin type — even oily — can be dehydrated.",
      },
      {
        q: "How do I keep skin hydrated?",
        a: "Barrier-supporting skincare, hydrating treatments, and gentle products make a big difference. We'll build a routine with you.",
      },
    ],
  },
  "oily-skin": {
    signs: [
      "Shine, especially in the T-zone",
      "Enlarged-looking pores",
      "Frequent breakouts or congestion",
      "Makeup that slides off quickly",
    ],
    causes: [
      "Overactive oil glands",
      "Hormones and genetics",
      "Humidity and climate",
      "Stripping products that trigger more oil",
    ],
    faqs: [
      {
        q: "Should I avoid moisturizer if I'm oily?",
        a: "No — skipping moisturizer can actually increase oil. The key is the right lightweight, balancing products.",
      },
      {
        q: "What treatments help oily skin?",
        a: "Balancing facials, peels, and a tailored routine help regulate oil and refine the skin over time.",
      },
    ],
  },
  melasma: {
    signs: [
      "Symmetrical brown or gray-brown patches",
      "Discoloration on the cheeks, forehead, or upper lip",
      "Patches that worsen with sun",
      "Pigmentation linked to hormonal changes",
    ],
    causes: [
      "Hormonal triggers (pregnancy, birth control)",
      "Sun exposure",
      "Genetics",
      "Heat and skin inflammation",
    ],
    faqs: [
      {
        q: "Is melasma permanent?",
        a: "Melasma is chronic and can recur, but a careful plan of gentle treatments, brightening skincare, and strict sun protection keeps it well controlled.",
      },
      {
        q: "Why does my melasma keep coming back?",
        a: "Sun and heat are major triggers. Daily SPF and avoiding heat exposure are essential to maintaining results.",
      },
    ],
  },
  "stretch-marks": {
    signs: [
      "Streaks or lines on the skin",
      "Marks that start red/purple and fade to white",
      "Texture changes where skin stretched",
      "Common on the abdomen, hips, or thighs",
    ],
    causes: [
      "Rapid stretching during growth or pregnancy",
      "Weight changes",
      "Hormonal factors",
      "Genetics",
    ],
    faqs: [
      {
        q: "Can stretch marks be removed?",
        a: "They can't always be erased, but microneedling and collagen-building treatments noticeably improve their texture and appearance.",
      },
      {
        q: "Do older stretch marks respond to treatment?",
        a: "Newer marks respond best, but mature (white) marks can still improve with resurfacing treatments.",
      },
    ],
  },
  "broken-capillaries": {
    signs: [
      "Small visible red or purple vessels",
      "Threadlike veins around the nose and cheeks",
      "Persistent localized redness",
      "Vessels that worsen over time",
    ],
    causes: [
      "Sun damage",
      "Genetics and thin skin",
      "Rosacea or sensitivity",
      "Trauma, heat, or alcohol",
    ],
    faqs: [
      {
        q: "What's the best treatment?",
        a: "Laser and light-based therapies target and fade visible vessels effectively, often in just a few sessions.",
      },
      {
        q: "Will they come back?",
        a: "Treated vessels are gone, but new ones can form — sun protection and trigger management help prevent them.",
      },
    ],
  },
  "skin-texture-irregularities": {
    signs: [
      "Rough or bumpy skin surface",
      "Uneven tone and texture",
      "Visible pores and congestion",
      "Skin that doesn't feel smooth",
    ],
    causes: [
      "Sun damage and aging",
      "Scarring and congestion",
      "Slowed cell turnover",
      "Dryness and buildup",
    ],
    faqs: [
      {
        q: "What improves skin texture fastest?",
        a: "Resurfacing treatments like microneedling, peels, and Morpheus8 smooth texture by encouraging fresh, even skin.",
      },
      {
        q: "Can I treat texture and tone together?",
        a: "Yes — many of our treatments improve both texture and tone in the same session series.",
      },
    ],
  },
  "skin-aging": {
    signs: [
      "A combination of lines, laxity, and volume loss",
      "Dullness and uneven tone",
      "Thinner, less firm skin",
      "An overall tired appearance",
    ],
    causes: [
      "Natural decline in collagen and elastin",
      "Cumulative sun damage",
      "Hormonal changes",
      "Lifestyle and environment",
    ],
    faqs: [
      {
        q: "What's the best anti-aging plan?",
        a: "A combination approach works best — relaxers, fillers, resurfacing, and skin tightening, layered into a personalized plan.",
      },
      {
        q: "Is it ever too late to start?",
        a: "Never. Clients see meaningful improvement at every age with the right combination of treatments and skincare.",
      },
    ],
  },

  // ─── Wellness ──────────────────────────────────────────────────────
  "weight-gain": {
    signs: [
      "Unexplained or stubborn weight gain",
      "Difficulty losing weight despite effort",
      "Changes in body composition",
      "Low energy alongside weight changes",
    ],
    causes: [
      "Hormonal imbalances",
      "Slowing metabolism with age",
      "Stress and sleep disruption",
      "Lifestyle and dietary factors",
    ],
    faqs: [
      {
        q: "How is medical weight loss different from a diet?",
        a: "It's physician-guided and personalized, combining modern therapies, monitoring, and support to address the root causes — not just willpower.",
      },
      {
        q: "Is it safe?",
        a: "Our programs are medically supervised and tailored to your health, with ongoing oversight throughout.",
      },
    ],
  },
  "hair-loss": {
    signs: [
      "Thinning hair or a widening part",
      "Increased shedding",
      "A receding hairline",
      "Less volume and density",
    ],
    causes: [
      "Genetics",
      "Hormonal changes",
      "Stress and nutrition",
      "Age and medical factors",
    ],
    faqs: [
      {
        q: "Can hair loss be reversed?",
        a: "Many clients see improvement with regenerative and wellness-based therapies, especially when started early.",
      },
      {
        q: "What causes my hair loss?",
        a: "It's often multifactorial. We assess hormones, nutrition, and lifestyle to build a targeted plan.",
      },
    ],
  },
  "low-energy": {
    signs: [
      "Persistent fatigue or sluggishness",
      "Difficulty concentrating or 'brain fog'",
      "Low motivation",
      "Feeling unrested despite sleep",
    ],
    causes: [
      "Hormonal imbalances",
      "Nutrient deficiencies",
      "Stress and poor sleep",
      "Lifestyle and underlying health factors",
    ],
    faqs: [
      {
        q: "Why am I always tired?",
        a: "Ongoing fatigue often signals hormonal imbalance or nutrient gaps. We assess the root cause rather than masking symptoms.",
      },
      {
        q: "How can you help?",
        a: "Through hormone optimization, IV wellness therapy, and personalized guidance designed to restore your energy.",
      },
    ],
  },
  "mens-hormone-balancing": {
    signs: [
      "Fatigue and low energy",
      "Reduced strength or muscle mass",
      "Low libido",
      "Weight gain and mental fog",
    ],
    causes: [
      "Declining testosterone with age",
      "Stress and poor sleep",
      "Lifestyle and nutrition",
      "Underlying health conditions",
    ],
    faqs: [
      {
        q: "How do I know if my hormones are off?",
        a: "Symptoms plus lab testing tell the story. We use comprehensive bloodwork to guide a personalized plan.",
      },
      {
        q: "Is hormone therapy safe for men?",
        a: "When medically supervised and tailored to your labs, hormone optimization is a safe, well-established approach.",
      },
    ],
  },
  "womens-hormone-balancing": {
    signs: [
      "Fatigue, mood changes, or irritability",
      "Weight gain",
      "Sleep disruption and night sweats",
      "Low libido and brain fog",
    ],
    causes: [
      "Perimenopause and menopause",
      "Hormonal fluctuations",
      "Stress and lifestyle",
      "Age-related changes",
    ],
    faqs: [
      {
        q: "Do I have to wait until menopause?",
        a: "No — hormonal symptoms can begin years earlier in perimenopause, and we can help at any stage.",
      },
      {
        q: "Will therapy be customized to me?",
        a: "Absolutely. We tailor every plan to your labs, symptoms, and goals, with ongoing monitoring.",
      },
    ],
  },
  "low-sex-drive": {
    signs: [
      "Reduced interest in intimacy",
      "Changes in arousal or satisfaction",
      "Fatigue affecting libido",
      "Emotional or relationship strain",
    ],
    causes: [
      "Hormonal imbalances",
      "Stress and fatigue",
      "Life stage and aging",
      "Underlying health or medications",
    ],
    faqs: [
      {
        q: "Is low libido treatable?",
        a: "Often, yes. Restoring hormonal balance and supporting overall wellness can meaningfully improve libido and confidence.",
      },
      {
        q: "Is this a private, judgment-free process?",
        a: "Completely. We approach intimate health with discretion, compassion, and personalized care.",
      },
    ],
  },
};
