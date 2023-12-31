/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from "$service-worker";

import { cacheFiles, deleteOldCaches, getFromCache } from "./lib/utils/sw";

const CACHE = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files, // everything in `static`
  ...prerendered, // prerendered pages
];

sw.addEventListener("install", (event) => {
  event.waitUntil(sw.skipWaiting());
  event.waitUntil(cacheFiles(CACHE, ASSETS));
});

sw.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches(CACHE));
  event.waitUntil(sw.clients.claim());
});

sw.addEventListener("fetch", async (event) => {
  event.respondWith(getFromCache(CACHE, ASSETS, event.request) as Promise<Response>);
});
