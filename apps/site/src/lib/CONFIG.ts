import type { Brand, Socials } from "./typings/standard";

export const DEFAULT_LOCALE: Locale = "en" as const;

export const BRAND: Brand = {
  author: {
    name: "LeetStrength",
    url: "https://leetstrength.com",
  },
  color: {
    primary: "#5920df",
    secondary: "#df20b9",
  },
  logo: {
    dark: "/images/logos/logo.png",
    light: "/images/logos/logo.png",
  },
  name: "KesvaL",
  startDate: new Date("2023-06-01"),
  url: "https://kesval.com",
} as const;

export const SOCIALS_LIST = ["instagram", "tiktok", "twitter"] as const;

export type SocialName = (typeof SOCIALS_LIST)[number];

export const SOCIALS: Socials = {
  instagram: {
    url: "https://instagram.com/leetstrength",
  },
  tiktok: {
    url: "https://tiktok.com/@leetstrength",
  },
  twitter: {
    url: "https://twitter.com/leetstrength",
  },
} as const;

export const LOCALES = ["en", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const VERSION = "1.0.0";

export const THEMES = ["light", "auto", "dark"] as const;

export type Theme = (typeof THEMES)[number];

export const SEARCH_PARAMS_LIST = ["owlang"] as const;

export type SearchParam = (typeof SEARCH_PARAMS_LIST)[number];

export interface LocalStorage {
  theme: Theme;
}

export type LocalStorageKey = keyof LocalStorage;
