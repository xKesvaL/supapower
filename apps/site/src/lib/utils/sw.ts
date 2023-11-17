export const cacheFiles = async (cacheKey: string, assets: string[]) => {
	const cache = await caches.open(cacheKey);
	await cache.addAll(assets);
};

export const deleteOldCaches = async (currentCacheKey: string) => {
	for (const key of await caches.keys()) {
		if (key !== currentCacheKey) {
			await caches.delete(key);
		}
	}
};

export const getFromCache = async (
	cacheKey: string,
	assets: string[],
	request: Request
): Promise<Response> => {
	if (
		request.method !== 'GET' ||
		request.url.startsWith('chrome-extension://') ||
		request.url.includes('extension')
	) {
		return await fetch(request);
	}

	const url = new URL(request.url);
	const cache = await caches.open(cacheKey);

	if (assets.includes(url.pathname)) {
		return cache.match(url.pathname) as Promise<Response>;
	}

	try {
		const response = await fetch(request);

		if (response.status === 200) {
			cache.put(request, response.clone());
		}

		return response;
	} catch (e) {
		return cache.match(request) as Promise<Response>;
	}
};
