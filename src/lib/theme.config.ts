// Source of truth for theme tokens.
// CSS counterpart in src/styles/global.css (@theme block) — keep in lockstep.
export const theme = {
  colors: {
    sage: "#a29b94",
    lavender: "#d5cde4",
    warmGray: "#f5f3f0",
    cream: "#faf8f5",
    espresso: "#2c2825",
    foreground: "#111827",
  },
  fonts: {
    display: "'Bodoni Moda', serif",
    body: "'Work Sans', sans-serif",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
} as const;

export type Theme = typeof theme;
