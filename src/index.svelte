<script lang="ts">
  import { isDarkTheme } from './stores';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import Presentation from './components/Presentation.svelte';
</script>

<main
  class="min-h-screen flex flex-col justify-between font-body bg-gradient-to-br {$isDarkTheme
    ? 'from-blue to-blue-dark text-gray'
    : 'from-yellow to-yellow-dark text-brown'}"
>
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>
