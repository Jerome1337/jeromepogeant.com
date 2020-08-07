<script>
  import { writable } from 'svelte/store';
  import { locale, locales } from 'svelte-i18n';
  import FlagFR from '../public/images/flag-fr.svg';
  import FlagGB from '../public/images/flag-gb.svg';

  const sortLocales = () => {
    const allLocales = [...[$locale], ...$locales];

    return allLocales.filter((item, index) => allLocales.indexOf(item) === index);
  };

  const orderedLocales = writable(sortLocales());

  const toggleLanguage = (newLocale) => {
    locale.set(newLocale);
    locale.subscribe(() => {});

    const localeSelector = document.getElementById('localeSelector');
    localeSelector.style.pointerEvents = 'none';
    setTimeout(() => {
      localeSelector.style.pointerEvents = 'auto';
    }, 200);

    orderedLocales.update(() => sortLocales());
  };
</script>

<style>
  div {
    height: 36px;
  }

  div:hover {
    height: 72px;
    border-radius: 1rem;
  }
</style>

<div
  id="localeSelector"
  class="overflow-hidden rounded-lg border border-gray-600 px-2 hover:bg-gray-600 transition-all duration-200 z-10">
  <ul>
    {#each $orderedLocales as locale}
      <li on:click="{toggleLanguage(locale)}" class="py-2 border-b border-gray-800 cursor-pointer first:cursor-default">
        {#if locale === 'en-US'}
          <FlagGB height="20" class="rounded-full" />
        {:else}
          <FlagFR height="20" class="rounded-full" />
        {/if}
      </li>
    {/each}
  </ul>
</div>
