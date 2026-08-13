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
  areaServed: string;
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
    areaServed: "Brookside, Kansas City, Missouri",
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
    areaServed: "Country Club Plaza, Kansas City, Missouri",
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
    areaServed: "Union Hill, Kansas City, Missouri",
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
    areaServed: "Rockhill, Kansas City, Missouri",
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
  {
    slug: "waldo",
    neighborhood: "Waldo",
    areaServed: "Waldo, Kansas City, Missouri",
    seoTitle: "Med Spa Near Waldo, Kansas City | 816 Med Spa",
    seoDescription:
      "816 Med Spa serves Waldo from West 39th Street with personalized facials, microneedling, laser hair removal, body treatments, and medical wellness.",
    canonical: "https://www.816medspa.com/locations/waldo/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Personalized skin, laser, face, body, and wellness care serving Waldo from 816’s West 39th Street studio.",
    hero: {
      eyebrow: "Med Spa Serving Waldo, Kansas City",
      title: "Med spa care near Waldo, designed for real life.",
      description:
        "From customized skin care and laser hair removal to face, body, and medically guided wellness options, 816 builds individualized plans at our Midtown Kansas City studio on West 39th Street.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City",
    },
    introduction: {
      eyebrow: "Waldo Roots, An Individual Plan",
      title: "A clear path from concern to care.",
      paragraphs: [
        "Waldo’s business district gathers around 75th Street and Wornall Road, with the Harry Wiggins Trolley Track Trail carrying forward part of the area’s streetcar history. The surrounding south Kansas City neighborhood has a strong identity shaped by homes and locally rooted businesses.",
        "Care at 816 starts with the concern, not a preset package. Your provider can help you compare treatment methods, visit frequency, expected recovery, and maintenance before you decide what belongs in your plan.",
        "816 serves Waldo from our studio at 638 W 39th St., north of the neighborhood in Midtown Kansas City. We do not operate a separate Waldo location.",
      ],
    },
    serviceSection: {
      eyebrow: "Med Spa Services for Waldo",
      title: "Choose the concern first. We’ll help sort the options.",
    },
    services: [
      {
        title: "Skin care from maintenance to collagen renewal",
        description:
          "The customized 816 Signature Facial supports regular cleansing, exfoliation, and nourishment. Traditional microneedling creates controlled microchannels without radiofrequency, while Morpheus8 combines microneedling with RF energy. Your skin, health history, and goals help determine the appropriate level of care.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Customized skin treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "816 Signature Facial", href: "/services/signature-facial/" },
          { label: "Microneedling", href: "/services/microneedling/" },
          { label: "Morpheus8", href: "/services/morpheus8/" },
        ],
      },
      {
        title: "Options for unwanted hair and excessive sweating",
        description:
          "Laser hair removal targets pigment in the hair follicle to reduce regrowth over a series of sessions. Underarm neurotoxin works differently, reducing excessive sweating by blocking the signals that activate sweat glands in the treated area. Your provider will review suitability and expectations for either service.",
        href: "/treatments/underarms/",
        image: "/images/services/laser-hair-removal.jpg",
        imageAlt: "Laser hair removal treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Laser Hair Removal", href: "/services/laser-hair-removal/" },
          { label: "Underarm Neurotoxin", href: "/services/underarm-neurotoxin/" },
        ],
      },
      {
        title: "Expression-focused injectables, planned individually",
        description:
          "Neurotoxin can be placed for distinct goals, including softening frown lines, creating a subtle lip flip, or relaxing overactive masseter muscles. Each area calls for a different assessment and technique, with recommendations based on your anatomy, health history, and preferred degree of change.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing a personalized injectable treatment",
        links: [
          { label: "Frown Lines", href: "/services/frown-lines/" },
          { label: "Lip Flip", href: "/services/lip-flip/" },
          { label: "Jawline and Masseter", href: "/services/jawline-and-masseter/" },
        ],
      },
      {
        title: "Different support for body and wellness goals",
        description:
          "Body contouring and medical wellness address different needs. Evolve supports selected firming and toning goals, while medical weight-loss and hormone programs begin with a health assessment and ongoing clinical guidance. Your provider can explain where each approach fits—and where it does not.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa clinician reviewing an individualized care plan",
        links: [
          { label: "Evolve", href: "/services/evolve/" },
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Waldo",
      title: "Your appointment is north on West 39th Street.",
      paragraphs: [
        "The intersection of 75th Street and Wornall Road is a useful reference point for central Waldo. 816 Aesthetic Med Spa is at 638 W 39th St., north of the neighborhood in Midtown Kansas City. Because Waldo covers a broad area, use Get Directions for a current route from your exact starting point.",
        "Request a named service online when you know what you want to explore, or choose a consultation when you want help comparing options. Bring your questions, relevant health information, and any dates that could affect treatment timing or recovery.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "Provider and client discussing a personalized plan at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Does 816 Med Spa have a Waldo location?",
        a: "No. 816 serves Waldo from our studio at 638 W 39th St. in Midtown Kansas City, north of the neighborhood. We do not operate a separate Waldo branch.",
      },
      {
        q: "Where is 816 in relation to 75th and Wornall?",
        a: "The 816 studio is north of this central Waldo intersection, at 638 W 39th St. Waldo spans a broad area, so use the Get Directions link for current navigation from your specific starting point rather than relying on a fixed travel estimate.",
      },
      {
        q: "What is the difference between laser hair removal and underarm neurotoxin?",
        a: "Laser hair removal targets hair follicles to reduce regrowth over a series of visits. Underarm neurotoxin targets the signals that activate sweat glands to reduce excessive sweating in the treated area. They address different concerns, and your provider will assess candidacy for either service.",
      },
      {
        q: "How do a facial, microneedling, and Morpheus8 differ?",
        a: "A customized facial focuses on cleansing, exfoliation, and topical nourishment. Traditional microneedling creates controlled microchannels without radiofrequency. Morpheus8 combines microneedling with RF energy and may suit different texture or firmness goals. An assessment helps determine which approach is appropriate for your skin.",
      },
    ],
    closing: {
      eyebrow: "Serving Waldo from West 39th Street",
      title: "Choose a next step that fits your routine.",
      description:
        "Request an appointment at 816 Aesthetic Med Spa in Midtown Kansas City to discuss skin maintenance, face or body treatments, or medically guided wellness care.",
    },
  },
  {
    slug: "mission-hills",
    neighborhood: "Mission Hills",
    areaServed: "Mission Hills, Kansas",
    seoTitle: "Med Spa Near Mission Hills, KS | 816 Med Spa",
    seoDescription:
      "Mission Hills, Kansas clients visit 816 Med Spa in Kansas City, Missouri for personalized injectables, skin, body, and medically guided wellness care.",
    canonical: "https://www.816medspa.com/locations/mission-hills/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Consultation-led aesthetic and wellness care for Mission Hills, Kansas clients at 816’s Kansas City, Missouri studio.",
    hero: {
      eyebrow: "Med Spa Serving Mission Hills, Kansas",
      title: "Considered med spa care for Mission Hills clients.",
      description:
        "Visit 816 Aesthetic Med Spa at 638 W 39th St. in Kansas City, Missouri, for personalized skin, injectable, body, and medically guided wellness care.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City, Missouri",
    },
    introduction: {
      eyebrow: "Considered Care, Carefully Planned",
      title: "Every detail should serve the plan.",
      paragraphs: [
        "Mission Hills was envisioned in 1912 as a garden community. Wooded hills, winding streams, fountains, sculpture, and thoughtfully landscaped roadsides remain part of the city’s identity.",
        "At 816 Aesthetic Med Spa, a considered approach means looking beyond a single treatment. We begin with what you want to address, then account for your health history, anatomy, skin, lifestyle, comfort, and preferred degree of change before discussing appropriate options.",
        "Appointments promoted on this page take place at 638 W 39th St. in Kansas City, Missouri—not in Mission Hills, Kansas. The studio is north and east of Mission Hills, across the state line; use Get Directions for current routing from your starting point.",
      ],
    },
    serviceSection: {
      eyebrow: "Care for Mission Hills Clients",
      title: "A broader plan, assembled one decision at a time.",
    },
    services: [
      {
        title: "Wellness care that begins with the clinical picture",
        description:
          "816 offers medically guided weight-loss programs and hormone replacement therapy for women and men, along with Empower for specialized women’s wellness. Recommendations depend on your health history, goals, and provider assessment.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider preparing an individualized wellness plan",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
          { label: "Hormone Therapy for Women", href: "/services/hrt-women/" },
          { label: "Hormone Therapy for Men", href: "/services/hrt-men/" },
        ],
      },
      {
        title: "A layered plan for facial balance and renewal",
        description:
          "Wrinkle relaxers can soften selected expression lines, filler can restore or enhance facial structure, and Morpheus8 can address texture and laxity through radiofrequency microneedling. Your provider can help determine whether one treatment or a staged combination fits your goals.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing an individualized facial treatment",
        links: [
          { label: "Brow Lift", href: "/services/brow-lift/" },
          { label: "Cheek Filler", href: "/services/cheek-filler/" },
          { label: "Morpheus8", href: "/services/morpheus8/" },
        ],
      },
      {
        title: "Skin maintenance with adjustable intensity",
        description:
          "A customized facial can support routine maintenance, while chemical peels and IPL offer more targeted options for concerns such as dullness, uneven texture, visible pigment, or redness. Treatment intensity and timing are selected for your skin and goals.",
        href: "/treatments/skin/",
        image: "/images/branding/home-skin-care.jpg",
        imageAlt: "Customized facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "816 Signature Facial", href: "/services/signature-facial/" },
          { label: "Refine Peel", href: "/services/refine-peel/" },
          { label: "IPL Photofacial", href: "/services/ipl/" },
        ],
      },
      {
        title: "Body-focused care, selected by concern",
        description:
          "Evolve offers a non-surgical option for body-toning, firming, and contouring goals. Laser hair removal supports longer-term hair reduction, while underarm neurotoxin is available for excessive sweating.",
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
      eyebrow: "From Mission Hills, Kansas, to West 39th Street",
      title: "Cross the state line for care in Kansas City, Missouri.",
      paragraphs: [
        "816 Aesthetic Med Spa is located at 638 W 39th St. in Kansas City, Missouri, north and east of Mission Hills. The visit crosses the Kansas–Missouri state line, but the precise route depends on where you begin, so use the directions link for current navigation.",
        "If you already know which service you want to discuss, request an appointment online. If your goals cross more than one category, tell the team when booking so they can help identify the appropriate consultation and provider.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "Provider and client discussing a personalized plan at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Is 816 Med Spa located in Mission Hills, Kansas?",
        a: "No. This page is for clients coming from Mission Hills, but appointments promoted here take place at 638 W 39th St. in Kansas City, Missouri.",
      },
      {
        q: "Which direction is 816 from Mission Hills?",
        a: "The studio is north and east of Mission Hills, across the Kansas–Missouri state line. Because the best streets can vary by your starting point and current conditions, use the Get Directions link for live routing.",
      },
      {
        q: "Can I discuss both aesthetic and wellness goals?",
        a: "Yes. Share the full scope of your goals when requesting an appointment. Different services may require different providers, assessments, or treatment plans, and the team can help identify an appropriate starting point.",
      },
      {
        q: "Which services can support an ongoing skin-maintenance plan?",
        a: "Options include the 816 Signature Facial, Luminate Facial, chemical peels, IPL, microneedling, and Morpheus8. An in-person skin assessment helps determine the appropriate treatment type, intensity, and schedule.",
      },
    ],
    closing: {
      eyebrow: "Mission Hills Clients, Begin Here",
      title: "Choose care that considers the full picture.",
      description:
        "Visit 816 Aesthetic Med Spa at 638 W 39th St. in Kansas City, Missouri, to discuss a personalized plan for your aesthetic, skin, body, or wellness goals.",
    },
  },
  {
    slug: "prairie-village",
    neighborhood: "Prairie Village",
    areaServed: "Prairie Village, Kansas",
    seoTitle: "Med Spa Near Prairie Village, KS | 816 Med Spa",
    seoDescription:
      "Explore personalized skin, injectable, body, and wellness care near Prairie Village at 816 Med Spa on West 39th Street in Kansas City, Missouri.",
    canonical: "https://www.816medspa.com/locations/prairie-village/",
    ogImage: "/images/branding/home-lobby-hero.jpg",
    hubDescription:
      "Personalized aesthetic and wellness care for Prairie Village, provided across the state line at our Kansas City, Missouri, studio.",
    hero: {
      eyebrow: "Med Spa Near Prairie Village, Kansas",
      title: "A clear path to med spa care near Prairie Village.",
      description:
        "816 brings skin, injectable, body, and medically guided wellness services together at our West 39th Street studio in Kansas City, Missouri, north and east of Prairie Village.",
      image: "/images/branding/home-lobby-hero.jpg",
      imageAlt: "Modern reception lounge at 816 Aesthetic Med Spa in Kansas City, Missouri",
    },
    introduction: {
      eyebrow: "Kansas to Missouri, with the Details Clear",
      title: "One studio. A plan built from the full picture.",
      paragraphs: [
        "Prairie Village is a Johnson County, Kansas, city bordered by neighboring municipalities, including Kansas City, Missouri. Whether you begin near the 75th Street corridor, Harmon Park, or Meadowbrook Park on Nall Avenue, 816’s studio is north and east in Kansas City, Missouri.",
        "Your visit can begin with questions rather than a treatment name. Tell us whether your priority is skin texture, facial expression lines, body goals, or medically guided wellness. The team can explain relevant options, candidacy, timing, and how care could be sequenced.",
        "Appointments described on this page take place at 638 W 39th St., Kansas City, MO 64111. 816 serves the Prairie Village area from this Missouri studio; this page does not represent a Prairie Village or Kansas location.",
      ],
    },
    serviceSection: {
      eyebrow: "Care Available to Prairie Village",
      title: "Four ways to begin, one place to ask questions.",
    },
    services: [
      {
        title: "Wellness care that begins with clinical context",
        description:
          "Medical weight-loss programs and hormone therapy are evaluated against your goals, health history, and clinical assessment. Empower offers an additional women’s wellness option. Recommendations and monitoring are individualized.",
        href: "/treatments/wellness/",
        image: "/images/branding/home-hormone-therapy.jpg",
        imageAlt: "816 Med Spa provider reviewing a medically guided wellness plan",
        links: [
          { label: "Weight Loss for Women", href: "/services/weight-loss-women/" },
          { label: "Weight Loss for Men", href: "/services/weight-loss-men/" },
          { label: "Hormone Therapy for Women", href: "/services/hrt-women/" },
          { label: "Hormone Therapy for Men", href: "/services/hrt-men/" },
        ],
      },
      {
        title: "Choose skin care by concern, not intensity alone",
        description:
          "Dermaplaning provides surface exfoliation, while the Retinol Plus Facial and Transform Peel use different approaches to renewal. Your provider can discuss which option fits your skin, goals, and expected aftercare.",
        href: "/treatments/skin/",
        image: "/images/services/dermaplane-facial.jpg",
        imageAlt: "Dermaplane facial treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Dermaplane Facial", href: "/services/dermaplane-facial/" },
          { label: "Retinol Plus Facial", href: "/services/retinol-plus-facial/" },
          { label: "Transform Peel", href: "/services/transform-peel/" },
        ],
      },
      {
        title: "Target expression lines and facial balance selectively",
        description:
          "Neurotoxin can be placed for concerns such as crow’s feet, a downward-pulling brow, or a lip flip. Placement and dosing depend on your anatomy, movement, goals, and candidacy.",
        href: "/treatments/face/",
        image: "/images/branding/home-injectables.jpg",
        imageAlt: "816 Med Spa provider preparing a targeted injectable treatment",
        links: [
          { label: "Crow’s Feet", href: "/services/crows-feet/" },
          { label: "Brow Lift", href: "/services/brow-lift/" },
          { label: "Lip Flip", href: "/services/lip-flip/" },
        ],
      },
      {
        title: "Body options for specific, practical goals",
        description:
          "Laser hair removal targets follicles to reduce regrowth over a series, underarm neurotoxin addresses excessive sweating, and Evolve supports firming, toning, and contouring goals. A consultation helps match the option to the concern.",
        href: "/treatments/body/",
        image: "/images/services/laser-hair-removal.jpg",
        imageAlt: "Laser hair removal treatment at 816 Aesthetic Med Spa",
        links: [
          { label: "Laser Hair Removal", href: "/services/laser-hair-removal/" },
          { label: "Underarm Neurotoxin", href: "/services/underarm-neurotoxin/" },
          { label: "Evolve Body Contouring", href: "/services/evolve/" },
        ],
      },
    ],
    visit: {
      eyebrow: "Plan Your Visit from Prairie Village",
      title: "Check the state and city before you go.",
      paragraphs: [
        "Prairie Village covers several corridors, and your starting point may be near State Line Road, Mission Road, or Nall Avenue. The destination is 638 W 39th St., Kansas City, MO 64111—north and east of Prairie Village, across the Kansas–Missouri state line. Use Get Directions for live navigation from your exact starting point.",
        "Before leaving, confirm that the map destination shows Kansas City, Missouri, not Prairie Village or another Kansas address. If you are unsure which appointment type to request, start with a consultation and list the concerns you want to discuss.",
      ],
      image: "/images/branding/contact-consult.jpg",
      imageAlt: "Provider and client discussing treatment priorities at 816 Aesthetic Med Spa",
    },
    faqs: [
      {
        q: "Is 816 Med Spa in Prairie Village, Kansas?",
        a: "No. The location promoted on this page is 638 W 39th St., Kansas City, MO 64111. This is an area-served page for Prairie Village, not a Prairie Village or Kansas location listing.",
      },
      {
        q: "Will I cross the state line from Prairie Village?",
        a: "Yes. Prairie Village is in Johnson County, Kansas, while 816 is in Kansas City, Missouri. The studio is north and east of Prairie Village across the Kansas–Missouri state line. Use Get Directions for current navigation from your exact starting point.",
      },
      {
        q: "Does the route differ from Harmon Park and Meadowbrook Park?",
        a: "Yes. Harmon Park is near 77th Place and Delmar Street, while Meadowbrook Park is at 9101 Nall Avenue, so the best path depends on your starting point and current conditions. Use live directions to 638 W 39th St., Kansas City, MO 64111.",
      },
      {
        q: "Can I compare a facial, a peel, and an injectable during a consultation?",
        a: "Yes. Bring each concern you want to discuss. Your provider can assess your skin, facial movement, health history, timing, and preferences, then explain which options may be appropriate and whether they should be staged.",
      },
    ],
    closing: {
      eyebrow: "Prairie Village, Meet Us in Missouri",
      title: "Bring your questions across the state line.",
      description:
        "Request a consultation at 816’s West 39th Street studio in Kansas City, Missouri, to discuss the skin, face, body, or wellness goals you want to prioritize.",
    },
  },
];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
