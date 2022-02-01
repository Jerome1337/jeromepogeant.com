import { writable } from 'svelte/store';

// eslint-disable-next-line
export const isDarkTheme = writable(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
