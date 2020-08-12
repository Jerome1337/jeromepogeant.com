<script>
  import { writable } from 'svelte/store';
  import { locale, locales } from 'svelte-i18n';
  import FlagFR from '../../public/images/flag-fr.svg';
  import FlagGB from '../../public/images/flag-gb.svg';
  import { isDarkTheme } from '../stores';

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
    height: 37px;
  }

  div:hover {
    height: 72px;
    border-radius: 1rem;
  }
</style>

<div
  id="localeSelector"
  class="overflow-hidden rounded-lg border {$isDarkTheme ? 'border-gray hover:bg-gray' : 'border-brown hover:bg-brown'}
  px-2 transition-all duration-200 z-10">
  <ul>
    {#each $orderedLocales as locale}
      <li
        on:click="{toggleLanguage(locale)}"
        class="py-2 border-b border-{$isDarkTheme ? 'gray-dark' : 'brown-light'} cursor-pointer first:cursor-default">
        {#if locale === 'en-US'}
          <FlagGB height="20" class="rounded-full" />
        {:else}
          <FlagFR height="20" class="rounded-full" />
        {/if}
      </li>
    {/each}
  </ul>
</div>
