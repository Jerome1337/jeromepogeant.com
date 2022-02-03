<script lang="ts">
  import { locale, locales } from 'svelte-i18n';
  import { writable } from 'svelte/store';

  import FlagFR from '../assets/flag-fr.svg';
  import FlagGB from '../assets/flag-gb.svg';
  import { isDarkTheme } from '../stores';

  const sortLocales = (): string[] => {
    const allLocales = [...[$locale], ...$locales];

    return allLocales.filter((item, index) => allLocales.indexOf(item) === index);
  };

  const orderedLocales = writable(sortLocales());

  const toggleLanguage = (newLocale: string): void => {
    locale.set(newLocale);
    locale.subscribe(() => {});

    orderedLocales.update(() => sortLocales());
  };

  const borderClass = (index: number): string | undefined => {
    if (index === 0) {
      return `border-b ${$isDarkTheme ? 'border-gray-dark' : 'border-brown-light'}`;
    }

    return undefined;
  };
</script>

<div
  class="overflow-hidden rounded-lg border h-[37px] hover:h-[72px] hover:rounded-2xl {$isDarkTheme
    ? 'border-gray hover:bg-gray'
    : 'border-brown hover:bg-brown'}
  px-2 transition-all duration-200 z-10"
>
  <ul>
    {#each $orderedLocales as locale, index}
      <li on:click={toggleLanguage(locale)} class="py-2 {borderClass(index)} cursor-pointer first:cursor-default">
        {#if locale === 'en-US'}
          <FlagGB height="20" class="rounded-full" />
        {:else}
          <FlagFR height="20" class="rounded-full" />
        {/if}
      </li>
    {/each}
  </ul>
</div>
