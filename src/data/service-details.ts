// Extended, per-service content for the /services/[slug] pages.
// Keyed by the same slug as src/data/services.ts.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  benefits: string[];
  howItWorks: string[];
  faqs: ServiceFaq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  // ─── Face · Injectables ────────────────────────────────────────────
  "forehead-lines": {
    benefits: [
      "Softens horizontal forehead lines",
      "No downtime — return to your day immediately",
      "Natural results that preserve expression",
      "Helps prevent deeper lines over time",
    ],
    howItWorks: [
      "We assess your muscle movement and goals",
      "A few precise neurotoxin injections are placed",
      "Results appear within days and refine over two weeks",
    ],
    faqs: [
      {
        q: "Does it hurt?",
        a: "Most clients feel only a tiny pinch; the treatment takes just minutes.",
      },
      {
        q: "How long does it last?",
        a: "Typically three to four months, after which a quick maintenance visit keeps results fresh.",
      },
    ],
  },
  "frown-lines": {
    benefits: [
      "Smooths the vertical '11s' between the brows",
      "Softens a stern or tired resting expression",
      "Fast treatment with no downtime",
      "Works preventatively as well as correctively",
    ],
    howItWorks: [
      "We evaluate the strength of your frown muscles",
      "Neurotoxin is precisely injected between the brows",
      "Lines soften over the following one to two weeks",
    ],
    faqs: [
      {
        q: "How many units will I need?",
        a: "It varies by muscle strength; we'll recommend a personalized dose at your visit.",
      },
      {
        q: "Is there downtime?",
        a: "None — just avoid rubbing the area for a few hours afterward.",
      },
    ],
  },
  "crows-feet": {
    benefits: [
      "Smooths lines at the corners of the eyes",
      "Brightens and refreshes the eye area",
      "Keeps your smile natural",
      "Quick, comfortable treatment",
    ],
    howItWorks: [
      "We assess the lines around your eyes when you smile",
      "A few small injections are placed at the outer corners",
      "Results develop over the next several days",
    ],
    faqs: [
      {
        q: "Is treatment near the eyes safe?",
        a: "Yes — it's one of the most common, well-established neurotoxin areas when done by a trained injector.",
      },
      {
        q: "How long do results last?",
        a: "Around three to four months for most clients.",
      },
    ],
  },
  "brow-lift": {
    benefits: [
      "Subtly lifts and opens the eyes",
      "Non-surgical with no downtime",
      "Refreshes a tired or heavy brow",
      "Natural, balanced result",
    ],
    howItWorks: [
      "We assess your brow position and eye shape",
      "Neurotoxin relaxes the muscles that pull the brow down",
      "A subtle lift appears over the following days",
    ],
    faqs: [
      {
        q: "How much lift can I expect?",
        a: "A neurotoxin brow lift offers a subtle, natural elevation — ideal for refreshing the eyes without surgery.",
      },
      {
        q: "How long does it last?",
        a: "Typically three to four months.",
      },
    ],
  },
  "lip-flip": {
    benefits: [
      "Creates a fuller-looking upper lip",
      "Softens a 'gummy' smile",
      "No filler required",
      "Quick and subtle enhancement",
    ],
    howItWorks: [
      "We discuss your desired lip appearance",
      "A few units of neurotoxin are placed along the upper lip",
      "The lip gently rolls outward over the next several days",
    ],
    faqs: [
      {
        q: "How is a lip flip different from filler?",
        a: "A lip flip uses neurotoxin to relax the lip muscle for a subtle enhancement, while filler adds actual volume. They can also be combined.",
      },
      {
        q: "How long does it last?",
        a: "A lip flip typically lasts two to three months.",
      },
    ],
  },
  "chin-dimpling": {
    benefits: [
      "Smooths a dimpled or 'pebbled' chin",
      "Softens the lower face",
      "Quick treatment, no downtime",
      "Natural-looking result",
    ],
    howItWorks: [
      "We assess your chin muscle movement",
      "Neurotoxin is injected to relax the overactive muscle",
      "The chin's surface smooths over the following days",
    ],
    faqs: [
      {
        q: "Will it affect my smile?",
        a: "No — it targets only the chin muscle responsible for dimpling, leaving your expression natural.",
      },
      {
        q: "How long does it last?",
        a: "Around three to four months.",
      },
    ],
  },
  "jawline-and-masseter": {
    benefits: [
      "Slims and softens a wide or square jawline",
      "Relieves clenching, grinding, and jaw tension",
      "Can ease related tension headaches",
      "Long-lasting with repeat treatments",
    ],
    howItWorks: [
      "We assess the size and strength of your masseter muscles",
      "Neurotoxin is injected into the masseters",
      "The muscles gradually slim over several weeks",
    ],
    faqs: [
      {
        q: "Does it help with grinding (bruxism)?",
        a: "Yes — relaxing the masseter muscles often relieves clenching, grinding, and associated tension or headaches.",
      },
      {
        q: "When will I see slimming?",
        a: "Jawline slimming develops gradually over four to six weeks as the muscle relaxes.",
      },
    ],
  },
  "lip-filler": {
    benefits: [
      "Adds natural volume and definition",
      "Hydrates and shapes the lips",
      "Fully customizable to your goals",
      "Immediate, long-lasting results",
    ],
    howItWorks: [
      "We discuss your desired shape and volume",
      "Hyaluronic acid filler is injected with a comfort-focused technique",
      "Refreshed lips are visible right away, settling over a few days",
    ],
    faqs: [
      {
        q: "Will my lips look overdone?",
        a: "Not with our approach — we focus on balanced, natural-looking enhancement tailored to your features.",
      },
      {
        q: "How long does lip filler last?",
        a: "Typically six to twelve months depending on the product and your metabolism.",
      },
    ],
  },
  "cheek-filler": {
    benefits: [
      "Restores youthful cheek volume and lift",
      "Softens lines below the cheeks",
      "Enhances facial contour and balance",
      "Immediate, natural-looking results",
    ],
    howItWorks: [
      "We assess your facial structure and volume loss",
      "Filler is strategically placed to restore support",
      "You'll see lift and contour right away",
    ],
    faqs: [
      {
        q: "Does cheek filler lift the face?",
        a: "Yes — restoring cheek support creates a subtle lift that can soften the mid-face and nasolabial folds.",
      },
      {
        q: "How long does it last?",
        a: "Cheek filler often lasts twelve to eighteen months.",
      },
    ],
  },

  // ─── Multi-category sculpting / laser ──────────────────────────────
  morpheus8: {
    benefits: [
      "Tightens skin and refines texture",
      "Improves tone, scars, and laxity",
      "Minimal downtime",
      "Works on both the face and body",
    ],
    howItWorks: [
      "A numbing cream is applied for your comfort",
      "Microneedles deliver radiofrequency energy beneath the skin",
      "Collagen rebuilds over the following weeks and months",
      "A short series delivers optimal results",
    ],
    faqs: [
      {
        q: "How much downtime is there?",
        a: "Most clients have mild redness for a day or two, then can resume normal activities quickly.",
      },
      {
        q: "When will I see results?",
        a: "Skin improves over several weeks as new collagen forms, with continued results over months.",
      },
    ],
  },
  "laser-hair-removal": {
    benefits: [
      "Long-term reduction of unwanted hair",
      "Smooth, low-maintenance skin",
      "Fewer ingrown hairs and less irritation",
      "Treats a wide range of face and body areas",
    ],
    howItWorks: [
      "We assess your hair and skin type",
      "The laser targets pigment in the hair follicle",
      "Treated hair sheds over the following weeks",
      "A series of sessions delivers lasting smoothness",
    ],
    faqs: [
      {
        q: "How many sessions will I need?",
        a: "Most clients need a series of six or more sessions, since hair grows in cycles, plus occasional maintenance.",
      },
      {
        q: "Is it painful?",
        a: "Most describe a quick snapping sensation; our technology is designed for comfort.",
      },
    ],
  },
  ipl: {
    benefits: [
      "Fades sun spots and brown discoloration",
      "Reduces redness and visible vessels",
      "Evens and brightens overall tone",
      "Little to no downtime",
    ],
    howItWorks: [
      "We assess your pigmentation and skin tone",
      "Pulses of light target pigment and vessels",
      "Spots darken, then flake away over days",
      "A series delivers the clearest results",
    ],
    faqs: [
      {
        q: "What does IPL feel like?",
        a: "Most clients feel a light, warm snap with each pulse. Treatment is quick and well tolerated.",
      },
      {
        q: "How many treatments are needed?",
        a: "Many clients see great results in three to five sessions, depending on their concerns.",
      },
    ],
  },
  evolve: {
    benefits: [
      "Firms and tones the body",
      "Targets stubborn areas hands-free",
      "Comfortable, relaxing sessions",
      "No downtime",
    ],
    howItWorks: [
      "We identify your target areas and goals",
      "Applicators deliver energy to remodel skin and tissue",
      "You relax during the hands-free treatment",
      "Results build over a series of sessions",
    ],
    faqs: [
      {
        q: "Is Evolve comfortable?",
        a: "Yes — most clients find it relaxing, describing a warming sensation during the hands-free treatment.",
      },
      {
        q: "When will I see results?",
        a: "Results develop gradually over a series of treatments and the weeks that follow.",
      },
    ],
  },
  "underarm-neurotoxin": {
    benefits: [
      "Dramatically reduces underarm sweating",
      "Long-lasting dryness and confidence",
      "Quick treatment with no downtime",
      "Clinically proven for hyperhidrosis",
    ],
    howItWorks: [
      "We map the active sweat area",
      "A series of small neurotoxin injections are placed",
      "Sweat production drops over the following days",
      "Results typically last several months",
    ],
    faqs: [
      {
        q: "How long does it keep me dry?",
        a: "Most clients enjoy noticeably reduced sweating for four to six months or more.",
      },
      {
        q: "Is the treatment uncomfortable?",
        a: "Injections are quick and shallow; most clients tolerate it very well.",
      },
    ],
  },

  // ─── Skin · Facials & Peels ────────────────────────────────────────
  "dermaplane-facial": {
    benefits: [
      "Instantly smoother, brighter skin",
      "Removes peach fuzz and dead skin",
      "Better skincare and makeup application",
      "No downtime",
    ],
    howItWorks: [
      "Your skin is cleansed and prepped",
      "A sterile blade gently exfoliates the surface",
      "Nourishing products are applied to finish",
    ],
    faqs: [
      {
        q: "Will my hair grow back thicker?",
        a: "No — dermaplaning removes fine vellus hair, which grows back exactly as before, not thicker or darker.",
      },
      {
        q: "How often should I get it?",
        a: "Every three to four weeks works well for maintaining smooth, glowing skin.",
      },
    ],
  },
  "microdermabrasion-facial": {
    benefits: [
      "Refines texture and unclogs pores",
      "Brightens a dull complexion",
      "Gentle with no downtime",
      "Improves product absorption",
    ],
    howItWorks: [
      "Your skin is cleansed and assessed",
      "Gentle exfoliation buffs away dead skin",
      "Hydrating, soothing products complete the treatment",
    ],
    faqs: [
      {
        q: "Is it suitable for sensitive skin?",
        a: "It's gentle and customizable; we'll adjust the intensity to suit your skin.",
      },
      {
        q: "How many treatments will I need?",
        a: "A series often yields the best results, with maintenance every few weeks.",
      },
    ],
  },
  "signature-facial": {
    benefits: [
      "Fully customized to your skin",
      "Deep cleansing and nourishment",
      "A relaxing, restorative experience",
      "Glowing, balanced results",
    ],
    howItWorks: [
      "We analyze your skin and goals",
      "A tailored routine of cleansing, exfoliation, and treatment is performed",
      "Targeted serums and masks address your needs",
    ],
    faqs: [
      {
        q: "What makes it 'signature'?",
        a: "It's fully personalized — we customize every step to your skin's needs that day for the best result.",
      },
      {
        q: "How often should I come in?",
        a: "A facial every four to six weeks helps maintain healthy, glowing skin.",
      },
    ],
  },
  "luminate-facial": {
    benefits: [
      "Targets dullness and uneven tone",
      "Reveals brighter, more radiant skin",
      "Customizable brightening actives",
      "No downtime",
    ],
    howItWorks: [
      "Your skin is cleansed and prepped",
      "Brightening actives and exfoliation are applied",
      "Nourishing products lock in radiance",
    ],
    faqs: [
      {
        q: "Will it help with dark spots?",
        a: "It brightens overall tone and can help with mild discoloration; deeper spots may need peels or IPL.",
      },
      {
        q: "Is there downtime?",
        a: "None — you'll leave glowing and ready for your day.",
      },
    ],
  },
  "retinol-plus-facial": {
    benefits: [
      "Accelerates cell turnover",
      "Smooths texture and fine lines",
      "Refreshes tired skin",
      "Professional-strength results",
    ],
    howItWorks: [
      "Skin is cleansed and prepared",
      "A professional retinol treatment is applied",
      "Soothing, hydrating products finish the facial",
      "Light flaking may follow as skin renews",
    ],
    faqs: [
      {
        q: "Will my skin peel afterward?",
        a: "You may notice light flaking for a few days as skin renews — a normal part of the process.",
      },
      {
        q: "Can I use retinol at home too?",
        a: "Yes, and we'll recommend a routine that complements your in-spa treatments.",
      },
    ],
  },
  "clarify-peel": {
    benefits: [
      "Clears and prevents breakouts",
      "Unclogs and refines pores",
      "Calms acne-prone skin",
      "Reveals clearer skin",
    ],
    howItWorks: [
      "Skin is cleansed and assessed",
      "The clarifying peel solution is applied",
      "Skin is neutralized and soothed, with aftercare guidance",
      "Light peeling may follow over several days",
    ],
    faqs: [
      {
        q: "Is it good for active breakouts?",
        a: "Yes — it's formulated to target congestion and acne-prone skin while calming inflammation.",
      },
      {
        q: "How many peels will I need?",
        a: "A series spaced a few weeks apart typically delivers the best results.",
      },
    ],
  },
  "refine-peel": {
    benefits: [
      "Smooths rough texture",
      "Improves tone and clarity",
      "Versatile for many skin types",
      "Reveals fresher skin",
    ],
    howItWorks: [
      "Skin is cleansed and prepped",
      "A moderate-depth peel is applied",
      "Skin is neutralized and soothed",
      "Exfoliation occurs over the following days",
    ],
    faqs: [
      {
        q: "How much peeling should I expect?",
        a: "Light to moderate flaking for several days is typical as fresh skin emerges.",
      },
      {
        q: "When will I see results?",
        a: "Skin looks fresher within a week, with continued improvement over a series.",
      },
    ],
  },
  "transform-peel": {
    benefits: [
      "Our most intensive resurfacing peel",
      "Targets pigmentation, texture, and aging",
      "Dramatic renewal in fewer treatments",
      "Visibly brighter, smoother skin",
    ],
    howItWorks: [
      "A thorough consultation ensures it's right for you",
      "The advanced peel is carefully applied",
      "Skin visibly exfoliates over several days",
      "Renewed skin is revealed with aftercare support",
    ],
    faqs: [
      {
        q: "How much downtime is involved?",
        a: "Expect several days of visible peeling. We'll prepare you with full aftercare instructions.",
      },
      {
        q: "Who is it best for?",
        a: "It's ideal for deeper concerns like pigmentation, texture, and signs of aging — we'll confirm suitability first.",
      },
    ],
  },

  // ─── Wellness ──────────────────────────────────────────────────────
  "weight-loss-women": {
    benefits: [
      "Physician-guided, personalized program",
      "Sustainable, lasting results",
      "Addresses hormones and metabolism",
      "Ongoing support and monitoring",
    ],
    howItWorks: [
      "A consultation and health assessment",
      "A personalized plan with modern therapies",
      "Regular check-ins to monitor progress",
      "Adjustments to keep you on track",
    ],
    faqs: [
      {
        q: "How is this different from fad diets?",
        a: "It's medically supervised and tailored to your body, addressing root causes rather than quick fixes.",
      },
      {
        q: "Will I keep the weight off?",
        a: "Our focus is on sustainable habits and ongoing support to help maintain your results.",
      },
    ],
  },
  "weight-loss-men": {
    benefits: [
      "Physician-guided, effective program",
      "Supports energy and strength",
      "Personalized to your metabolism",
      "Ongoing monitoring and support",
    ],
    howItWorks: [
      "A consultation and health assessment",
      "A tailored plan with proven therapies",
      "Regular progress check-ins",
      "Adjustments as you progress",
    ],
    faqs: [
      {
        q: "How quickly will I see results?",
        a: "Many clients see steady progress within the first weeks, guided by a sustainable, medical approach.",
      },
      {
        q: "Is it safe?",
        a: "Yes — the program is medically supervised and customized to your health throughout.",
      },
    ],
  },
  "hrt-women": {
    benefits: [
      "Restores hormonal balance",
      "Improves energy, mood, and sleep",
      "Supports healthy weight and libido",
      "Personalized and closely monitored",
    ],
    howItWorks: [
      "Comprehensive lab testing and consultation",
      "A customized hormone plan based on your results",
      "Treatment with ongoing monitoring",
      "Adjustments to optimize how you feel",
    ],
    faqs: [
      {
        q: "What symptoms can it help?",
        a: "Fatigue, mood changes, weight gain, sleep issues, low libido, and more linked to hormonal shifts.",
      },
      {
        q: "Is it safe?",
        a: "When medically supervised and tailored to your labs, hormone therapy is a safe, established approach.",
      },
    ],
  },
  "hrt-men": {
    benefits: [
      "Optimizes testosterone and hormones",
      "Boosts energy, strength, and focus",
      "Supports libido and body composition",
      "Personalized and closely monitored",
    ],
    howItWorks: [
      "Comprehensive bloodwork and consultation",
      "A customized protocol based on your labs",
      "Treatment with regular monitoring",
      "Ongoing optimization over time",
    ],
    faqs: [
      {
        q: "How do I know if I need it?",
        a: "Symptoms plus lab testing guide the decision. We use comprehensive bloodwork to personalize your plan.",
      },
      {
        q: "When will I feel a difference?",
        a: "Many men notice improved energy and focus within the first weeks of treatment.",
      },
    ],
  },
  empower: {
    benefits: [
      "Supports women's intimate wellness",
      "Comfortable, non-invasive approach",
      "Discreet, compassionate care",
      "Renewed comfort and confidence",
    ],
    howItWorks: [
      "A private, judgment-free consultation",
      "A personalized treatment plan",
      "Comfortable, non-invasive sessions",
      "Follow-up to support your results",
    ],
    faqs: [
      {
        q: "Is the treatment comfortable?",
        a: "Yes — Empower uses a comfortable, non-invasive approach, and your comfort and privacy are our priority.",
      },
      {
        q: "How do I know if it's right for me?",
        a: "A private consultation lets us understand your concerns and recommend whether Empower is a good fit.",
      },
    ],
  },
};
