import Cookies from "js-cookie";
import { type Readable, writable } from "svelte/store";
import { locale } from "svelte-i18n";

import { DEFAULT_LOCALE, type Locale } from "$lib/CONFIG";

interface LangStore extends Readable<Locale> {
  set: (lang: Locale) => void;
}

const createLangStore = (): LangStore => {
  let currentLang: Locale = DEFAULT_LOCALE;

  const lang = Cookies.get("lang");
  if (lang !== undefined) {
    currentLang = lang as Locale;
    void locale.set(lang);
  }

  const { set, subscribe } = writable(currentLang);

  const setLang = (newLang: Locale) => {
    void locale.set(newLang);
    Cookies.set("lang", newLang, {
      expires: 300,
      path: "/",
      sameSite: "lax",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      secure: true,
    });
    set(newLang);
  };

  return {
    set: setLang,
    subscribe,
  };
};

export const langStore = createLangStore();
