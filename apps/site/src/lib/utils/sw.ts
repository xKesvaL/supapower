import { readonlyURL } from "readonly-types";

export const cacheFiles = async (cacheKey: string, assets: string[]) => {
  const cache = await caches.open(cacheKey);
  await cache.addAll(assets);
};

export const deleteOldCaches = async (currentCacheKey: string) => {
  for (const key of await caches.keys()) {
    if (key !== currentCacheKey) {
      void caches.delete(key);
    }
  }
};

export const getFromCache = async (
  cacheKey: string,
  assets: readonly string[],
  request: Request,
): Promise<Response | undefined> => {
  if (
    request.method !== "GET" ||
    request.url.startsWith("chrome-extension://") ||
    request.url.includes("extension")
  ) {
    return await fetch(request);
  }

  const url = readonlyURL(request.url);
  const cache = await caches.open(cacheKey);

  if (url && url.pathname && assets.includes(url.pathname)) {
    return await cache.match(url.pathname);
  }

  try {
    const response = await fetch(request);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (response.status === 200) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch {
    return await cache.match(request);
  }
};
