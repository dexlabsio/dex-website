import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "var(--spacing-container)",
      },
    },
  },
} satisfies Config;


