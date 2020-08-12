<script>
  import Header from './components/Header.svelte';
  import Presentation from './components/Presentation.svelte';
  import Footer from './components/Footer.svelte';
  import { isDarkTheme } from './stores';
</script>

<main
  class="h-screen flex flex-col justify-between bg-topaz {$isDarkTheme ? 'bg-gradient-dark text-gray' : 'bg-gradient-light text-brown'}">
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>
