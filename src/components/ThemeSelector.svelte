<script>
  import Moon24 from 'carbon-icons-svelte/lib/Moon24';
  import Sun24 from 'carbon-icons-svelte/lib/Sun24';
  import { isDarkTheme } from '../stores';

  const toggleTheme = () => {
    isDarkTheme.update((currentTheme) => !currentTheme);
  };
</script>

<button
  class="py-3 transition-all duration-200 z-10 mx-3 outline-none focus:outline-none"
  type="button"
  on:click="{toggleTheme}">
  {#if $isDarkTheme}
    <Moon24 class="fill-current text-white" />
  {:else}
    <Sun24 class="fill-current text-gold-dark" />
  {/if}
</button>
