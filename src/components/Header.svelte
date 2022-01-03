<script lang="ts">
  import ThemeSelector from './ThemeSelector.svelte';
  import LanguageSelector from './LanguageSelector.svelte';
  import { isDarkThemeEnable } from '../stores.ts';
</script>

<header class="flex justify-between items-start h-[84px] p-6">
  {#if isDarkThemeEnable}
    <ThemeSelector />
  {:else}
    <span />
  {/if}
  <LanguageSelector />
</header>
