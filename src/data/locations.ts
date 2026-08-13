export interface LocationServiceCard {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
}

export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationLanding {
  slug: string;
  neighborhood: string;
  city: string;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  ogImage: string;
  hubDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  introduction: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  serviceSection: {
    eyebrow: string;
    title: string;
  };
  services: LocationServiceCard[];
  visit: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  faqs: LocationFaq[];
  closing: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

export const locations: LocationLanding[] = [
  {
    slug: "brookside",
    neighborhood: "Brookside",
    city: "Kansas City, Missouri",
    seoTitle: "Med Spa Near Brookside, Kansas City | 816 Med Spa",
    seoDescription:
      "Brookside clients visit 816 Med Spa at 638 W 39th St. in Midtown Kansas City for injectables, skin treatments, body contouring, and wellness care.",
    canonical: "https://www.816medspa.com/locations/brookside/",
    ogImage: "/images/locations/brookside-og.png",
    hubDescription:
      "Personalized aesthetic and wellness care for Brookside, provided from our Midtown Kansas City studio.",
    hero: {
      eyebrow: "Med Spa Near Brookside, Kansas City",
      title: "Personalized med spa care near Brookside.",
      description:
        "Explore injectables, advanced skin treatments, body contouring, and medically guided wellness at our Midtown Kansas City studio—a short drive north of Brookside.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City",
    },
    introduction: {
      eyebrow: "Thoughtful Care, Close to Home",
      title: "A treatment plan shaped around you.",
      paragraphs: [
        "Brookside has an easy confidence: established, welcoming, and distinctly Kansas City. We believe aesthetic care should feel just as considered.",
        "At 816 Aesthetic Med Spa, every visit begins with a conversation about your goals, health history, lifestyle, and comfort. Whether you want a subtle refresh or a longer-term skin, body, or wellness plan, our team will help you compare appropriate options without forcing a one-size-fits-all approach.",
        "Our studio is located at 638 W 39th St. in Midtown's 39th Street corridor, directly north of Brookside.",
      ],
    },
    serviceSection: {
      eyebrow: "Services Near Brookside",
      title: "Aesthetic and wellness care in one Kansas City studio.",
    },
    services: [
      {
        title: "Injectables for a rested, balanced look",
        description:
          "Wrinkle relaxers can soften expression lines while preserving natural movement. Dermal fillers can enhance or restore shape and volume in areas such as the lips and cheeks. Every plan is customized to your features and goals.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa injector preparing a personalized injectable treatment",
        links: [
          { label: "Forehead Lines", href: "/services/forehead-lines/" },
          { label: "Lip Filler", href: "/services/lip-filler/" },
          { label: "Cheek Filler", href: "/services/cheek-filler/" },
        ],
      },
      {
        title: "Skin renewal, from facials to advanced technology",
        description:
          "Customized facials and chemical peels support brighter, smoother-looking skin. Microneedling, IPL, and Morpheus8 offer additional options for concerns such as uneven tone, texture, fine lines, acne scarring, and skin laxity.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Personalized facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Morpheus8", href: "/services/morpheus8/" },
          { label: "IPL Photofacial", href: "/services/ipl/" },
          { label: "816 Signature Facial", href: "/services/signature-facial/" },
        ],
      },
      {
        title: "Body contouring and low-maintenance confidence",
        description:
          "Evolve and Morpheus8 can support body-toning, firming, and contouring goals without surgery. Laser hair removal provides a longer-term alternative to shaving and waxing.",
        href: "/treatments/body/",
        image: "/images/services/evolve.jpg",
        imageAlt: "Evolve body contouring treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Evolve", href: "/services/evolve/" },
          { label: "Laser Hair Removal", href: "/services/laser-hair-removal/" },
          { label: "Morpheus8", href: "/services/morpheus8/" },
        ],
      },
      {
        title: "Medical wellness with an individualized plan",
        description:
          "816 offers medically guided weight-loss programs, hormone replacement therapy for women and men, and specialized women's wellness through Empower. Recommendations are shaped by your health history and personal goals.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider reviewing a personalized wellness plan",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
          { label: "Women's Hormone Therapy", href: "/services/hrt-women/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Brookside",
      title: "Close enough to make self-care feel simple.",
      paragraphs: [
        "816 serves Brookside from our studio at 638 W 39th St. in Midtown Kansas City. The location is a short drive north of the neighborhood, near the Westport and 39th Street districts.",
        "Book online when you know what you need, or start with a consultation. Our team can help you understand the options, expected timeline, and what makes sense for your goals.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "A personalized consultation at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Is 816 Med Spa located in Brookside?",
        a: "816 serves Brookside from our studio at 638 W 39th St. in Midtown Kansas City, a short drive north of the neighborhood. We do not operate a separate Brookside location.",
      },
      {
        q: "Do I need to know which treatment to request?",
        a: "No. A consultation is an appropriate starting point if you are unsure. Your provider can review your goals, health history, and treatment preferences before recommending suitable options.",
      },
      {
        q: "What services are available at 816?",
        a: "Services include wrinkle relaxers and fillers, facials and chemical peels, microneedling, IPL, Morpheus8, laser hair removal, body contouring, medical weight-loss programs, hormone therapy, and specialized women's wellness.",
      },
      {
        q: "Who oversees care at 816?",
        a: "The practice is led by Dr. Patrick Lucaci, D.D.S., M.D., and supported by nurse practitioners, nurses, and aesthetic specialists. The appropriate team member depends on the service being considered.",
      },
    ],
    closing: {
      eyebrow: "Brookside, Start Here",
      title: "Your next step can be a conversation.",
      description:
        "Visit 816 Aesthetic Med Spa in Midtown Kansas City to explore a plan tailored to your skin, body, wellness goals, and comfort.",
    },
  },
  {
    slug: "country-club-plaza",
    neighborhood: "Country Club Plaza",
    city: "Kansas City, Missouri",
    seoTitle: "Med Spa Near Country Club Plaza, Kansas City | 816 Med Spa",
    seoDescription:
      "Visit 816 Med Spa on West 39th Street, north of Country Club Plaza, for personalized injectables, skin, body, and medically guided wellness care.",
    canonical: "https://www.816medspa.com/locations/country-club-plaza/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Physician-led aesthetic and wellness care near Country Club Plaza, provided from our West 39th Street studio.",
    hero: {
      eyebrow: "Med Spa Near Country Club Plaza",
      title: "A considered approach to aesthetics, north of the Plaza.",
      description:
        "From refined injectables and customized skin care to body and wellness treatments, 816 brings physician-led, personalized care to our West 39th Street studio in Midtown Kansas City.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa on West 39th Street in Kansas City",
    },
    introduction: {
      eyebrow: "From the Plaza to 39th Street",
      title: "Care with intention, not a preset formula.",
      paragraphs: [
        "Country Club Plaza brings together Spanish-inspired architecture, fountains, shopping, and dining across 15 Kansas City blocks. North of the district, 816 offers a calm setting for thoughtful aesthetic and wellness care.",
        "Your first decision does not have to be a treatment name. Tell us what you would like to address, how you want the result to feel, and what matters to your schedule and comfort. Our team can explain suitable options and build a plan around you.",
        "Appointments take place at 638 W 39th St. in Midtown Kansas City. 816 serves the Country Club Plaza area from this studio and does not operate a separate Plaza location.",
      ],
    },
    serviceSection: {
      eyebrow: "Treatments Near Country Club Plaza",
      title: "A personalized mix of aesthetic and wellness care.",
    },
    services: [
      {
        title: "Injectables planned around your features",
        description:
          "Wrinkle relaxers can soften specific expression lines while preserving natural movement. Lip and cheek filler can add shape, hydration, or support. Your provider will tailor a conservative plan to your anatomy and goals.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing a customized injectable treatment",
        links: [
          { label: "Forehead Lines", href: "/services/forehead-lines/" },
          { label: "Lip Filler", href: "/services/lip-filler/" },
          { label: "Cheek Filler", href: "/services/cheek-filler/" },
        ],
      },
      {
        title: "Facials and peels selected for your skin",
        description:
          "From the customized 816 Signature Facial to brightening and resurfacing options, treatments can be selected for concerns such as dullness, congestion, rough texture, or uneven tone. Your provider will help choose an appropriate level of treatment and aftercare.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Customized facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "816 Signature Facial", href: "/services/signature-facial/" },
          { label: "Luminate Facial", href: "/services/luminate-facial/" },
          { label: "Refine Peel", href: "/services/refine-peel/" },
        ],
      },
      {
        title: "Advanced technology for skin and body goals",
        description:
          "Morpheus8 combines microneedling with radiofrequency energy to support collagen remodeling and improve the look of texture and laxity. IPL addresses visible pigment and redness, while Evolve supports body-toning, firming, and contouring goals. A consultation helps determine which technology fits the concern.",
        href: "/services/morpheus8/",
        image: "/images/services/evolve.jpg",
        imageAlt: "Evolve body contouring technology at 816 Aesthetic Med Spa",
        links: [
          { label: "Morpheus8", href: "/services/morpheus8/" },
          { label: "IPL Photofacial", href: "/services/ipl/" },
          { label: "Evolve", href: "/services/evolve/" },
        ],
      },
      {
        title: "Medical wellness built from a personal assessment",
        description:
          "816 offers medically guided weight-loss programs and hormone replacement therapy for women and men, along with Empower for specialized women’s wellness. Recommendations depend on your health history, goals, and clinical assessment.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider reviewing an individualized wellness plan",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
          { label: "Hormone Therapy for Women", href: "/services/hrt-women/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Country Club Plaza",
      title: "Continue north for care built around your goals.",
      paragraphs: [
        "The Plaza spans multiple blocks, so the most useful route depends on exactly where your trip begins. Our studio is at 638 W 39th St., north of the district in Midtown Kansas City. Use Get Directions for current navigation from your starting point.",
        "If you already know the service you want to explore, request an appointment online. If you are comparing options or working toward a date on your calendar, begin with a consultation so your provider can discuss candidacy, timing, and aftercare.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "A provider speaking with a client during a consultation at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Is 816 Med Spa located in Country Club Plaza?",
        a: "No. 816 serves the Country Club Plaza area from our studio at 638 W 39th St. in Midtown Kansas City, north of the Plaza district. We do not operate a separate Plaza location.",
      },
      {
        q: "What is the best route to 816 from the Plaza?",
        a: "Because the Plaza covers multiple blocks and traffic conditions change, the best route depends on your starting point. Use the Get Directions link for current navigation to 638 W 39th St., Kansas City, MO 64111.",
      },
      {
        q: "How far ahead of an event should I schedule a treatment?",
        a: "Timing varies by treatment. Temporary redness, swelling, sensitivity, or peeling can occur with some services, while results may develop gradually with others. Share your event date before booking so your provider can discuss an appropriate timeline and whether the treatment is suitable for you.",
      },
      {
        q: "Can one consultation cover more than one goal?",
        a: "Yes. You can discuss face, skin, body, and wellness concerns in the same conversation. Your provider can help prioritize appropriate options and explain whether treatments should be combined or staged over time.",
      },
    ],
    closing: {
      eyebrow: "From the Plaza to 816",
      title: "Make space for care that fits your goals.",
      description:
        "Visit 816 Aesthetic Med Spa on West 39th Street for a personalized conversation about your skin, face, body, or wellness priorities.",
    },
  },
  {
    slug: "union-hill",
    neighborhood: "Union Hill",
    city: "Kansas City, Missouri",
    seoTitle: "Med Spa Near Union Hill, Kansas City | 816 Med Spa",
    seoDescription:
      "Explore personalized skin treatments, injectables, body contouring, and medical wellness near Union Hill at 816 Med Spa on West 39th Street.",
    canonical: "https://www.816medspa.com/locations/union-hill/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Personalized skin, injectable, body, and wellness care for Union Hill, provided from our West 39th Street studio.",
    hero: {
      eyebrow: "Med Spa Near Union Hill, Kansas City",
      title: "Personalized med spa care near Union Hill.",
      description:
        "Explore skin renewal, injectables, body treatments, and medically guided wellness at our West 39th Street studio, southwest of Union Hill.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City",
    },
    introduction: {
      eyebrow: "Personal Care, Thoughtfully Planned",
      title: "A modern approach that starts with listening.",
      paragraphs: [
        "Union Hill is a historic neighborhood on the southern edge of downtown Kansas City, shaped by an ongoing commitment to caring for the area and strengthening its sense of community.",
        "At 816 Aesthetic Med Spa, every plan begins with a conversation about your goals, health history, preferences, and comfort. From a focused skin treatment to a broader aesthetic or wellness plan, your provider will help you compare appropriate options without treating care as one-size-fits-all.",
        "Union Hill clients visit our studio at 638 W 39th St. The studio is southwest of the neighborhood on West 39th Street; use Get Directions for current routing from your starting point.",
      ],
    },
    serviceSection: {
      eyebrow: "Services Near Union Hill",
      title: "Aesthetic and wellness options, shaped around your goals.",
    },
    services: [
      {
        title: "Skin renewal for tone, texture, and radiance",
        description:
          "Customized facials and chemical peels can refresh the skin’s surface, while microneedling, IPL, and Morpheus8 offer options for concerns such as uneven tone, texture, fine lines, acne scarring, and laxity.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Personalized facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Morpheus8", href: "/services/morpheus8/" },
          { label: "IPL Photofacial", href: "/services/ipl/" },
          { label: "Microneedling", href: "/services/microneedling/" },
        ],
      },
      {
        title: "Injectables with a balanced, natural-looking approach",
        description:
          "Wrinkle relaxers can soften movement-related lines, while filler can restore or enhance facial shape and volume. Recommendations are tailored to your anatomy, goals, and comfort.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing an injectable treatment",
        links: [
          { label: "Frown Lines", href: "/services/frown-lines/" },
          { label: "Jawline and Masseter", href: "/services/jawline-and-masseter/" },
          { label: "Lip Filler", href: "/services/lip-filler/" },
        ],
      },
      {
        title: "Medical wellness built around the individual",
        description:
          "816 offers medically guided weight-loss programs and hormone replacement therapy for women and men, along with specialized women’s wellness through Empower. Your health history and goals guide the conversation.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider reviewing notes for individualized care",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Women’s Hormone Therapy", href: "/services/hrt-women/" },
          { label: "Men’s Hormone Therapy", href: "/services/hrt-men/" },
        ],
      },
      {
        title: "Body contouring and laser options",
        description:
          "Evolve and Morpheus8 can support firming, toning, and contouring goals. Laser hair removal can reduce unwanted hair, while underarm neurotoxin is available for excessive sweating.",
        href: "/treatments/body/",
        image: "/images/services/evolve.jpg",
        imageAlt: "Evolve body contouring treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Evolve", href: "/services/evolve/" },
          { label: "Laser Hair Removal", href: "/services/laser-hair-removal/" },
          { label: "Underarm Neurotoxin", href: "/services/underarm-neurotoxin/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Union Hill",
      title: "Your West 39th Street visit, clearly mapped.",
      paragraphs: [
        "816 Aesthetic Med Spa is located at 638 W 39th St., southwest of Union Hill. From the neighborhood, travel south and west toward the West 39th Street corridor, using the directions link for the current route from your starting point.",
        "Request an appointment online when you know what you need, or begin with a consultation. Our team can review your goals and health history, explain appropriate options, and help you understand what to expect.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "Provider and client discussing a personalized plan at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Where is 816 Med Spa in relation to Union Hill?",
        a: "816 Aesthetic Med Spa is at 638 W 39th St., southwest of Union Hill. Use the Get Directions link for current turn-by-turn routing from your specific starting point.",
      },
      {
        q: "Which treatments can help with uneven tone or texture?",
        a: "Depending on your skin and goals, options may include customized facials, chemical peels, microneedling, IPL, or Morpheus8. An in-person assessment helps your provider recommend an appropriate approach.",
      },
      {
        q: "What if I am deciding between injectable treatments?",
        a: "You do not need to choose before your visit. A provider can review your facial anatomy, goals, health history, and preferences before discussing wrinkle relaxers, filler, or another suitable option.",
      },
      {
        q: "Does 816 offer services beyond facial aesthetics?",
        a: "Yes. Available options include body contouring, laser hair removal, medically guided weight-loss programs, hormone replacement therapy for women and men, and specialized women’s wellness.",
      },
    ],
    closing: {
      eyebrow: "Union Hill, Your Next Step",
      title: "Start with a plan made for you.",
      description:
        "Visit 816 Aesthetic Med Spa on West 39th Street to explore personalized options for your skin, facial aesthetics, body, or wellness goals.",
    },
  },
  {
    slug: "rockhill",
    neighborhood: "Rockhill",
    city: "Kansas City, Missouri",
    seoTitle: "Med Spa Near Rockhill, Kansas City | 816 Med Spa",
    seoDescription:
      "Explore skin treatments, injectables, body contouring, and wellness care near Rockhill at 816 Med Spa, 638 W 39th St. in Midtown Kansas City.",
    canonical: "https://www.816medspa.com/locations/rockhill/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Skin, injectable, body, and wellness care for Rockhill, provided northwest of the neighborhood on West 39th Street.",
    hero: {
      eyebrow: "Med Spa Near Rockhill, Kansas City",
      title: "Personalized med spa care near Rockhill.",
      description:
        "Explore advanced skin treatments, injectables, body contouring, and medically guided wellness at our Midtown Kansas City studio, northwest of Rockhill.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City",
    },
    introduction: {
      eyebrow: "Thoughtful Care Near Rockhill",
      title: "Start with the goals that matter to you.",
      paragraphs: [
        "Rockhill sits east of the Nelson-Atkins Museum of Art, along streets near Rockhill Road. 816 serves the neighborhood from our Midtown studio on West 39th Street.",
        "Aesthetic care at 816 begins with your goals, health history, preferences, and comfort. Your provider can help you compare skin, injectable, body, and wellness options and shape an appropriate plan instead of defaulting to the same treatment for everyone.",
        "Our studio is located at 638 W 39th St., north and west of Rockhill. You can book a specific service online or start with a consultation when you want help choosing a first step.",
      ],
    },
    serviceSection: {
      eyebrow: "Services Near Rockhill",
      title: "Options selected for your concerns, comfort, and goals.",
    },
    services: [
      {
        title: "Skin care guided by your concerns",
        description:
          "Facials and chemical peels offer customizable surface renewal, while microneedling, IPL, and Morpheus8 may be considered for concerns including uneven tone, texture, fine lines, acne scarring, or laxity. A provider can help match the method to your skin and goals.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Personalized facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Microneedling", href: "/services/microneedling/" },
          { label: "IPL Photofacial", href: "/services/ipl/" },
          { label: "Morpheus8", href: "/services/morpheus8/" },
        ],
      },
      {
        title: "Injectables planned for balance and movement",
        description:
          "Wrinkle relaxers can soften expression lines, while dermal fillers can add or restore shape and volume. Treatment is planned around your facial anatomy, desired degree of change, and natural movement.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing for an injectable treatment",
        links: [
          { label: "Frown Lines", href: "/services/frown-lines/" },
          { label: "Lip Filler", href: "/services/lip-filler/" },
          { label: "Cheek Filler", href: "/services/cheek-filler/" },
        ],
      },
      {
        title: "Medically guided support for weight and hormones",
        description:
          "816 offers medical weight-loss programs and hormone replacement therapy for women and men, along with Empower for specialized women’s wellness. Suitability and recommendations depend on your health history, goals, and provider assessment.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider discussing a personalized wellness plan",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
          { label: "Women’s Hormone Therapy", href: "/services/hrt-women/" },
          { label: "Men’s Hormone Therapy", href: "/services/hrt-men/" },
        ],
      },
      {
        title: "Body treatments tailored to the area and goal",
        description:
          "Evolve and Morpheus8 offer non-surgical options for firming, toning, and contouring selected body areas. Laser hair removal is available for longer-term reduction of unwanted hair. Your plan depends on the area being treated and the result you want to pursue.",
        href: "/treatments/body/",
        image: "/images/services/evolve.jpg",
        imageAlt: "Evolve body contouring treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Evolve", href: "/services/evolve/" },
          { label: "Morpheus8", href: "/services/morpheus8/" },
          { label: "Laser Hair Removal", href: "/services/laser-hair-removal/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Rockhill",
      title: "Your appointment is on West 39th Street.",
      paragraphs: [
        "816 serves Rockhill from our studio at 638 W 39th St. in Midtown Kansas City. The studio is north and west of the neighborhood; from streets near Rockhill Road and the Nelson-Atkins, travel toward Midtown’s West 39th Street corridor.",
        "The best route can vary by your starting point and current traffic conditions, so use the directions link for live guidance. Book online if you already know the service you want, or start with a consultation to compare options with the team.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "A personalized consultation at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Does 816 Aesthetic Med Spa operate a Rockhill location?",
        a: "No. 816 serves Rockhill from our studio at 638 W 39th St. in Midtown Kansas City, north and west of the neighborhood. We do not operate a separate Rockhill location.",
      },
      {
        q: "What is the best way to plan a trip from Rockhill?",
        a: "Use the directions link on this page for a current route from your exact starting point. The 816 studio is northwest of Rockhill on West 39th Street, but the best streets to take can change with traffic and road conditions.",
      },
      {
        q: "Can I start with a skin concern instead of choosing a treatment?",
        a: "Yes. A consultation can begin with concerns such as uneven tone, texture, fine lines, acne scarring, or laxity. Your provider can then explain which available options may be appropriate for your skin, health history, and goals.",
      },
      {
        q: "Are body and wellness services offered at the same Kansas City studio?",
        a: "Yes. The 816 service menu includes Evolve, Morpheus8, laser hair removal, medical weight-loss programs, hormone therapy, and specialized women’s wellness. The appropriate service and provider depend on your goals and health history.",
      },
    ],
    closing: {
      eyebrow: "Rockhill, Begin Here",
      title: "Build a plan around what matters to you.",
      description:
        "Visit 816 Aesthetic Med Spa on West 39th Street to discuss thoughtful options for your skin, facial aesthetics, body, and wellness goals.",
    },
  },
];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
