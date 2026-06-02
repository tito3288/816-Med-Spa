// Source of truth for theme tokens.
// CSS counterpart in src/styles/global.css (@theme block) — keep in lockstep.
export const theme = {
  colors: {
    sage: "#a29b94",
    lavender: "#d5cde4",
    warmGray: "#f5f3f0",
    cream: "#faf8f5",
    espresso: "#2c2825",
    parchment: "#f6f0e3",
    bone: "#f7efe2",
    ink: "#322b21",
    gold: "#8a7450",
  },
  fonts: {
    display: "'Cormorant Garamond', serif",
    body: "'Montserrat', sans-serif",
    serifItalic: "'Cormorant Garamond', serif",
    sansWide: "'Montserrat', sans-serif",
    dmSans: "'DM Sans', sans-serif",
    script: "'Pinyon Script', cursive",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
} as const;

export type Theme = typeof theme;
