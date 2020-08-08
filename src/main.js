import { init, getLocaleFromNavigator } from 'svelte-i18n';
import App from './index.svelte';
import './components/Tailwind.svelte';
import './i18n';

const fallbackLocale = 'en-US';
const navigatorLocale = getLocaleFromNavigator();

init({
  fallbackLocale,
  initialLocale: ['en-US', 'fr-FR'].includes(navigatorLocale) ? navigatorLocale : fallbackLocale,
});

const app = new App({
  target: document.body,
});

export default app;
