import type { KIT_ROUTES } from '$lib/ROUTES';

import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

export default defineConfig({
	plugins: [sveltekit(), enhancedImages(), kitRoutes<KIT_ROUTES>()],
});
