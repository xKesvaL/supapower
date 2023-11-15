import type { Brand } from './typings/standard';

export const DEFAULT_LOCALE: Locale = 'en' as const;

export const BRAND = {
	author: {
		name: 'KesvaL',
		url: 'https://kesval.com'
	},
	color: {
		primary: '#5920df',
		secondary: '#df20b9'
	},
	logo: {
		dark: '/images/logos/logo.png',
		light: '/images/logos/logo.png'
	},
	name: 'KesvaL',
	url: 'https://kesval.com'
} as const satisfies Brand;

export const SOCIALS = {
	github: {
		url: 'https://github.com/xKesvaL'
	},
	instagram: {
		url: 'https://instagram.com/xkesval'
	},
	linkedin: {
		url: 'https://linkedin.com/in/jordan-abeddou'
	}
} as const;

export const LOCALES = ['en', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export const VERSION = '1.0.0';

export const THEMES = ['light', 'auto', 'dark'] as const;

export type Theme = (typeof THEMES)[number];

export const SEARCH_PARAMS_LIST = ['owlang'] as const;

export type SearchParam = (typeof SEARCH_PARAMS_LIST)[number];

export interface LocalStorage {
	theme: Theme;
}

export type LocalStorageKey = keyof LocalStorage;
