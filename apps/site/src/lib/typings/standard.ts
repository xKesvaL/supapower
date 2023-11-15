export interface Brand {
	author: BrandAuthor;
	color: BrandColors;
	logo: BrandLogo;
	name: string;
	url: string;
}

export interface BrandLogo {
	dark: string;
	light: string;
}

export interface BrandAuthor {
	name: string;
	url: string;
}


export type BrandColors = Record<BrandColor, string>;

export type BrandColor = 'primary' | 'secondary';

export type ThemeColor =
	| 'accent'
	| 'background'
	| 'card'
	| 'destructive'
	| 'info'
	| 'muted'
	| 'popover'
	| 'success'
	| BrandColor;

// eslint-disable-next-line perfectionist/sort-union-types
export type ThemeSize = 'sm' | 'md' | 'lg';

export interface FormattedZodError {
	[key: string]: {
		message: string;
	};
}