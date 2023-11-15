import { DEFAULT_LOCALE, type Locale } from '$lib/CONFIG';
import Cookies from 'js-cookie';
import { type Readable, writable } from 'svelte/store';
import { locale } from 'svelte-i18n';

interface LangStore extends Readable<Locale> {
	set: (lang: Locale) => void;
}

const createLangStore = (): LangStore => {
	let currentLang = DEFAULT_LOCALE;

	const lang = Cookies.get('lang');
	if (lang) {
		currentLang = lang as Locale;
		locale.set(lang);
	}

	const { set, subscribe } = writable(currentLang);

	const setLang = (lang: Locale) => {
		locale.set(lang);
		Cookies.set('lang', lang, {
			expires: 300,
			path: '/',
			sameSite: 'lax',
			secure: true,
		});
		set(lang);
	};

	return {
		set: setLang,
		subscribe,
	};
};

export const langStore = createLangStore();
