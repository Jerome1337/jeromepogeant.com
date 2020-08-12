<script>
  import ThemeSelector from './ThemeSelector.svelte';
  import LanguageSelector from './LanguageSelector.svelte';
</script>

<style>
  header {
    height: 84px;
  }
</style>

<header class="flex justify-between items-start p-6">
  <ThemeSelector />
  <LanguageSelector />
</header>
