import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./lib/langs/en.json'));
register('es', () => import('./lib/langs/es.json'));

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
});
