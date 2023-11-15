import { BRAND, VERSION } from '$lib/CONFIG';

export async function GET() {
	const data = {
		background_color: '#06040b',
		display: 'standalone',
		icons: [
			{
				sizes: '192x192',
				src: '/android-chrome-192x192.png',
				type: 'image/png',
			},
			{
				sizes: '512x512',
				src: '/android-chrome-512x512.png',
				type: 'image/png',
			},
		],
		name: BRAND.name,
		short_name: BRAND.name,
		start_url: `${BRAND.url}/?version=${VERSION}`,
		theme_color: BRAND.color.primary,
	};

	return Response.json(data, {
		headers: {
			'Content-Type': 'application/manifest+json',
		},
	});
}
