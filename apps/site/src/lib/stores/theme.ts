import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const createTheme = () => {
  let currentTheme;

  if (browser) {
    currentTheme = localStorage.getItem('theme');
  }

  const { set, subscribe } = writable(currentTheme);

  return {
    set: (value: 'auto' | 'light' | 'dark') => {
      if (browser) {
        localStorage.setItem('theme', value);
        document.documentElement.setAttribute('data-theme', value);
      }
      set(value);
    },
    subscribe
  };
};

export const theme = createTheme();
