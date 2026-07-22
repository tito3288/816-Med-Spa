export interface MembershipPlan {
  slug: string;
  name: string;
  monthlyPrice: number;
  benefits: string[];
  choice?: {
    heading: string;
    options: string[];
  };
}

export interface MembershipFaq {
  question: string;
  answer: string[];
}

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "elevate",
    name: "Elevate",
    monthlyPrice: 99,
    benefits: [
      "Free consultation with a full treatment plan",
      "Xeomin for $10 per unit (normally $11 per unit)",
      "Botox for $11 per unit (normally $12 per unit)",
      "10% off retail products",
      "One member facial rate per month: Dermaplane Facial for $89 ($10 savings)",
    ],
  },
  {
    slug: "refine",
    name: "Refine",
    monthlyPrice: 199,
    benefits: [
      "Free consultation with a full treatment plan",
      "Xeomin for $10 per unit (normally $11 per unit)",
      "Botox for $11 per unit (normally $12 per unit)",
      "15% off retail products",
      "One member facial rate per month: 816 Signature Facial for $105 ($25 savings)",
      "10% off aesthetic services, including laser, IPL, RF microneedling, peels, facials, and microneedling",
      "$75 off one syringe of filler",
    ],
  },
  {
    slug: "transform",
    name: "Transform",
    monthlyPrice: 299,
    benefits: [
      "Free consultation with a full treatment plan",
      "Xeomin for $10 per unit (normally $11 per unit)",
      "Botox for $11 per unit (normally $12 per unit)",
      "20% off retail products",
      "10% off wellness services, including supplements and peptides",
      "$60 off when joining our weight loss program",
      "$100 off one syringe of filler",
      "15% off aesthetic services, including laser, IPL, RF microneedling, peels, facials, and microneedling",
      "One member facial rate per month: 816 Signature Facial for $89 ($41 savings)",
    ],
    choice: {
      heading: "Choose one Transform benefit",
      options: [
        "A complimentary dermaplane add-on to a facial each month",
        "20 complimentary units of Xeomin, redeemable after three months",
      ],
    },
  },
];

export const membershipDetails = [
  "All memberships require a 12-month minimum commitment.",
  "Paid membership portions are non-refundable.",
  "Early cancellation requires a $250 fee. Available account credit may be used toward the fee when the balance is sufficient.",
  "Member pricing cannot be combined with other discounts.",
  "Third-party rewards programs may be used during a membership.",
  "Members receive a $25 birthday credit. Birthday credit cannot be used toward membership cancellation.",
];

export const membershipFaqs: MembershipFaq[] = [
  {
    question: "How do the memberships work?",
    answer: [
      "We offer three membership levels based on your budget and what you are looking to achieve: $99, $199, and $299 per month.",
      "Our Elevate, Refine, and Transform memberships work like an aesthetic savings account. Your monthly contributions build in your patient account and can be redeemed at any time.",
    ],
  },
  {
    question: "What is the benefit for me?",
    answer: [
      "These memberships help you save for upcoming appointments while receiving special member pricing and perks as a loyal patient of 816 Aesthetic Med Spa.",
    ],
  },
  {
    question: "Can I use my money on services not listed?",
    answer: [
      "Absolutely. Your account balance can be used on any service offered at 816 Aesthetic Med Spa. The additional perks listed for each level are special rates available only to members.",
    ],
  },
  {
    question: "Is this a contract?",
    answer: [
      "Yes. Memberships are 12-month contracts. A $250 cancellation fee applies to memberships cancelled before the end of the agreement to cover the savings received during the membership term.",
    ],
  },
  {
    question: "Can I change to a different membership level?",
    answer: ["Of course. You may upgrade to a higher membership level at any time."],
  },
  {
    question: "Is there a certain day I am charged each month?",
    answer: ["Yes. Membership fees are charged on the first day of every month."],
  },
  {
    question: "How can I check the amount in my account?",
    answer: [
      "Call or text us at 816-551-2322, and we can review your account balance and the services available to you.",
    ],
  },
  {
    question: "If I sign up in the middle of the month, can I receive immediate savings?",
    answer: ["Yes. Your membership savings begin as soon as you sign up."],
  },
  {
    question: "What happens if I do not use my full balance within the 12-month contract?",
    answer: [
      "Your account savings roll over to the next year. Any unused balance remains in your account until you are ready to use it.",
    ],
  },
  {
    question: "How can I sign up for a membership?",
    answer: [
      "Stop by 816 Aesthetic Med Spa to sign up, or call us at 816-551-2322 and we will be happy to help.",
    ],
  },
];
