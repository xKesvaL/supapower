import type { Handle } from '@sveltejs/kit';

import { dev } from '$app/environment';
import { DEFAULT_LOCALE } from '$lib/CONFIG';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.uid = event.cookies.get('uid') || crypto.randomUUID();

	const overwriteLang = event.url.searchParams.get('owlang');
	const langParam = event.params?.lang;

	let lang: string;
	if (overwriteLang && langParam) {
		lang = langParam;
	} else {
		lang =
			event.cookies.get('lang') ||
			langParam ||
			event.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] ||
			DEFAULT_LOCALE;
	}

	event.locals.lang = lang;

	if (!event.cookies.get('uid') && !dev) {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1);
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognize them when they return
		event.cookies.set('uid', event.locals.uid, {
			expires,
			httpOnly: true,
			path: '/',
			secure: true,
		});
	}

	return await resolve(event);
};
