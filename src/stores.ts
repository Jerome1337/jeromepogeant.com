import { writable } from 'svelte/store';

const isDarkThemeEnable = false;
const isDarkTheme = writable(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

export { isDarkThemeEnable, isDarkTheme };
export default null;
