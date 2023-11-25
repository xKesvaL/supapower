/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {},
    },
    extend: {
      screens: {
        fold: { max: "320px" },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
      },
      fontFamily: {
        emoji: [
          "Twemoji Country Flags",
          "Segoe UI Emoji",
          "Noto Color Emoji",
          "Segoe UI Symbol",
          "Apple Color Emoji",
          "EmojiSymbols",
          "Android Emoji",
        ],
        sans: ["var(--font-sans)"],
        title: ["var(--font-title)"],
      },
      boxShadow: {
        out: "0 0 4px 0 var(--sdw-out)",
        "out-sm": "0 0 2px 0 var(--sdw-out)",
        "out-md": "0 0 6px 0 var(--sdw-out)",
        "out-lg": "0 0 12px 0 var(--sdw-out)",
        "out-xl": "0 0 18px 0 var(--sdw-out)",
        "out-2xl": "0 0 24px 0 var(--sdw-out)",
      },
    },
  },
};

export default config;
