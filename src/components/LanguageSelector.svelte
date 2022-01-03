<script lang="ts">
  import { writable } from 'svelte/store';
  import { locale, locales } from 'svelte-i18n';
  import FlagFR from '../../public/images/flag-fr.svg';
  import FlagGB from '../../public/images/flag-gb.svg';
  import { isDarkTheme } from '../stores';

  const sortLocales = (): (string | null | undefined)[] => {
    const allLocales = [...[$locale], ...$locales];

    return allLocales.filter((item, index) => allLocales.indexOf(item) === index);
  };

  const orderedLocales = writable(sortLocales());

  const toggleLanguage = (newLocale: string): svelte.JSX.MouseEventHandler<HTMLLIElement> | null => {
    locale.set(newLocale);
    locale.subscribe(() => {});

    const localeSelector = document.getElementById('localeSelector');

    if (localeSelector !== null) {
      localeSelector.style.pointerEvents = 'none';
      setTimeout(() => {
        localeSelector.style.pointerEvents = 'auto';
      }, 200);
    }

    orderedLocales.update(() => sortLocales());

    return null;
  };
</script>

<div
  class="overflow-hidden rounded-lg border h-[37px] hover:h-[72px] hover:rounded-2xl {$isDarkTheme
    ? 'border-blue-light hover:bg-blue-light'
    : 'border-brown hover:bg-brown'}
  px-2 transition-all duration-200 z-10"
>
  <ul>
    {#each $orderedLocales as locale}
      <li
        on:click={toggleLanguage(locale)}
        class="py-2 border-b {$isDarkTheme
          ? 'border-gray-dark'
          : 'border-brown-light'} cursor-pointer first:cursor-default"
      >
        {#if locale === 'en-US'}
          <FlagGB height="20" class="rounded-full" />
        {:else}
          <FlagFR height="20" class="rounded-full" />
        {/if}
      </li>
    {/each}
  </ul>
</div>
