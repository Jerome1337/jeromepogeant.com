<script>
  import Presentation from './Presentation.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<main class="h-screen flex flex-col justify-between bg-gray-800 text-gray-600">
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>
