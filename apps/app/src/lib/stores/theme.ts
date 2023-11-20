import { writable } from "svelte/store";

import { browser } from "$app/environment";

const createTheme = () => {
  let currentTheme = "auto";

  if (browser) {
    currentTheme = localStorage.getItem("theme") ?? "auto";
  }

  const { set, subscribe } = writable(currentTheme);

  return {
    set: (value: "auto" | "dark" | "light") => {
      if (browser) {
        localStorage.setItem("theme", value);
        document.documentElement.dataset.theme = value;
      }
      set(value);
    },

    subscribe,
  };
};

export const theme = createTheme();
