import { DEFAULT_LOCALE } from '$lib/CONFIG';
import Cookies from 'js-cookie';
import { getLocaleFromNavigator, getLocaleFromPathname, init, register } from 'svelte-i18n';

const getLocaleFromCookie = () => {
	if (typeof window === 'undefined') return null;
	return Cookies.get('lang');
};

register('en', () => import('../lang/en.json'));
register('fr', () => import('../lang/fr.json'));

init({
	fallbackLocale: DEFAULT_LOCALE,
	initialLocale:
		getLocaleFromCookie() ||
		getLocaleFromPathname(/^\/(.*?)/) ||
		getLocaleFromNavigator() ||
		DEFAULT_LOCALE,
});
