// "What to Expect" — a 3-step care journey, tailored per category.
// Shared by both concern and service detail pages (both carry a category).

export interface ProcessStep {
  title: string;
  description: string;
}

export const processByCategory: Record<string, ProcessStep[]> = {
  Face: [
    {
      title: "Consultation",
      description:
        "We start by understanding your goals and assessing your facial features, skin, and natural movement.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Your provider performs a tailored treatment using the techniques best suited to your face and comfort.",
    },
    {
      title: "Results & Refinement",
      description:
        "Results refresh over the following days, and we plan any maintenance to keep you looking your best.",
    },
  ],
  Body: [
    {
      title: "Consultation",
      description:
        "We assess your target areas and goals, then design a plan suited to your body and lifestyle.",
    },
    {
      title: "Treatment Plan",
      description:
        "You begin a tailored treatment or series, performed with your comfort and results in mind.",
    },
    {
      title: "Results Over Time",
      description:
        "Results build over the following weeks, with guidance to help you maintain and enhance them.",
    },
  ],
  Skin: [
    {
      title: "Skin Analysis",
      description:
        "We analyze your skin in person to understand your concerns, skin type, and goals.",
    },
    {
      title: "Tailored Treatment",
      description:
        "Your provider performs a customized treatment or series targeting your specific skin goals.",
    },
    {
      title: "Reveal & Maintain",
      description:
        "Your skin reveals its results over the coming days, supported by a personalized skincare plan.",
    },
  ],
  Wellness: [
    {
      title: "Consultation & Labs",
      description:
        "We begin with a thorough consultation and any necessary lab work to understand your health.",
    },
    {
      title: "Personalized Protocol",
      description:
        "We design a custom plan based on your results, symptoms, and goals.",
    },
    {
      title: "Ongoing Optimization",
      description:
        "We monitor your progress and adjust your plan over time to keep you feeling your best.",
    },
  ],
};
