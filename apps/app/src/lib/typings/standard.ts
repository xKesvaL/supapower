import type { SocialName } from "$lib/CONFIG";

export interface BrandLogo {
  dark: string;
  light: string;
}

export interface BrandAuthor {
  name: string;
  url: string;
}
export type BrandColor = "primary" | "secondary";

export type BrandColors = {
  [key in BrandColor]: string;
};

export interface Brand {
  author: BrandAuthor;
  color: BrandColors;
  logo: BrandLogo;
  name: string;
  startDate: Date;
  url: string;
}

export interface Social {
  url: string;
}

export type Socials = {
  [key in SocialName]: Social;
};

export type ThemeColor =
  | BrandColor
  | "accent"
  | "background"
  | "card"
  | "destructive"
  | "info"
  | "muted"
  | "popover"
  | "success";

export type ThemeSize = "lg" | "md" | "sm";

export interface FormattedZodError {
  [key: string]: {
    message: string;
  };
}
