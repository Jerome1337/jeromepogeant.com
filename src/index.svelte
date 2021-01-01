<script>
  import Header from './components/Header.svelte';
  import Presentation from './components/Presentation.svelte';
  import Footer from './components/Footer.svelte';
  import { isDarkTheme } from './stores';
</script>

<main
  class="min-h-screen flex flex-col justify-between font-body bg-gradient-to-br {$isDarkTheme ? 'from-blue to-blue-dark text-gray' : 'from-yellow to-yellow-dark text-brown'}">
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>
