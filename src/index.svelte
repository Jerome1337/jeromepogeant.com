<script>
  import Header from './components/Header.svelte';
  import Presentation from './components/Presentation.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main class="h-screen flex flex-col justify-between bg-gray-800 text-gray-600">
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>
