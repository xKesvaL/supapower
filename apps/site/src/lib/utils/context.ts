import { getContext, setContext } from 'svelte';

export const contextKeys = [
	'currentWorkout',
	'user',
	'userData',
	'installPromptEvent',
	'displayMode',
	'online',
	'pathWithoutLang',
] as const;

export type ContextKey = (typeof contextKeys)[number];

export const setPathWithoutLang = (path: string) => {
	setContext('pathWithoutLang' satisfies ContextKey, path);
};

export const getPathWithoutLang = (): string => {
	return getContext('pathWithoutLang' satisfies ContextKey);
};

export type DisplayMode = 'browser' | 'fullscreen' | 'standalone';

export const setDisplayMode = (mode: DisplayMode) => {
	setContext('displayMode' satisfies ContextKey, mode);
};

export const getDisplayMode = (): DisplayMode => {
	return getContext('displayMode' satisfies ContextKey);
};

export const getPromptEvent = () => {
	return getContext<Event | undefined>('installPromptEvent' satisfies ContextKey);
};

export const setPromptEvent = (event: Event) => {
	return setContext<Event>('installPromptEvent' satisfies ContextKey, event);
};

export const getOnline = () => {
	return getContext<boolean>('online' satisfies ContextKey);
};

export const setOnline = (online: boolean) => {
	return setContext<boolean>('online' satisfies ContextKey, online);
};
