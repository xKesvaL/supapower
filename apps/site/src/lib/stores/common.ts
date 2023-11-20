/* eslint-disable @typescript-eslint/no-use-before-define */
import { writable } from "svelte/store";

const createNavigationOpenStore = () => {
  const { set, subscribe, update } = writable<boolean>(false);

  return {
    set: (isOpen: boolean) => {
      scrollLocked.set(isOpen);
      set(isOpen);
    },

    subscribe,

    toggle: () => {
      update((isLocked) => {
        scrollLocked.set(!isLocked);
        return !isLocked;
      });
    },

    update,
  };
};

export const scrollLocked = writable<boolean>(false);

export const navigationOpen = createNavigationOpenStore();
