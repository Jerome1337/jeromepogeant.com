import { init, getLocaleFromNavigator } from 'svelte-i18n';
import App from './App.svelte';
import './components/Tailwind.svelte';
import './i18n';

const fallbackLocale = 'en-US';
const navigatorLocale = getLocaleFromNavigator() || 'en-US';

init({
  fallbackLocale,
  initialLocale: ['en-US', 'fr-FR'].includes(navigatorLocale) ? navigatorLocale : fallbackLocale,
});

const app = new App({
  target: document.body,
});

export default app;
