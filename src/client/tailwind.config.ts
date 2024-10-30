import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#10A37F",
          dark: "#0b755b",
        },
        secondary: {
          light: "#282A2E",
          dark: "#1E1F22",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
