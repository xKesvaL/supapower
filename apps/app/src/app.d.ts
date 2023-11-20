/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/svelte" />
/// <reference types="vite-plugin-pwa/client" />

import type { LocalStorageKey, SearchParameter } from "$lib/CONFIG";

import "@total-typescript/ts-reset";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      lang: string;
    }

    interface PageData {
      lang: string;
    }
    // interface Platform {}
  }

  interface URLSearchParams {
    get(name: SearchParameter): null | string;
  }

  interface Storage {
    getItem(key: LocalStorageKey): null | string;
    setItem(key: LocalStorageKey, value: string): void;
  }
}

export {};
