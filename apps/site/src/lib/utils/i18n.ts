import Cookies from "js-cookie";
import { getLocaleFromNavigator, getLocaleFromPathname, init, register } from "svelte-i18n";

import { DEFAULT_LOCALE } from "$lib/CONFIG";

const getLocaleFromCookie = () => {
  if (typeof window === "undefined") {
    return undefined;
  }
  return Cookies.get("lang");
};

register("en", async () => await import("../lang/en.json"));
register("fr", async () => await import("../lang/fr.json"));

void init({
  fallbackLocale: DEFAULT_LOCALE,

  initialLocale:
    getLocaleFromCookie() ??
    getLocaleFromPathname(/^\/.{2,}?/u) ??
    getLocaleFromNavigator() ??
    DEFAULT_LOCALE,
});
