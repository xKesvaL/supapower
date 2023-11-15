import { writable } from 'svelte/store';

const createNavigationOpenStore = () => {
	const { set, subscribe, update } = writable<boolean>(false);

	return {
		set: (value: boolean) => {
			scrollLocked.set(value);
			set(value);
		},
		subscribe,
		toggle: () => {
			update((t) => {
				scrollLocked.set(!t);
				return !t;
			});
		},
		update,
	};
};

export const navigationOpen = createNavigationOpenStore();

export const scrollLocked = writable<boolean>(false);
