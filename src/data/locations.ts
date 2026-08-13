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
  services: LocationServiceCard[];
  visit: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  faqs: LocationFaq[];
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
  },
];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
