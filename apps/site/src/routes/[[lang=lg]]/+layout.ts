import type { Locale } from '$lib/CONFIG';

import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';
import { waitLocale } from 'svelte-i18n';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	const lang = data.lang;

	langStore.set(lang as Locale);

	await waitLocale();

	return {
		lang,
	};
};
