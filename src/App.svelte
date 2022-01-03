<script lang="ts">
  import Header from './components/Header.svelte';
  import Presentation from './components/Presentation.svelte';
  import Footer from './components/Footer.svelte';
  import { isDarkTheme } from './stores.ts';
</script>

<main class="min-h-screen flex flex-col justify-between font-body {$isDarkTheme ? 'text-blue-light' : 'text-purple'}">
  <Header />
  <div class="container m-auto px-6">
    <Presentation />
  </div>
  <Footer />
</main>

<style>
  main {
    background-color: #dd99ff;
    background-image: radial-gradient(at 42% 7%, hsla(249, 98%, 72%, 1) 0, transparent 56%),
      radial-gradient(at 69% 1%, hsla(261, 70%, 73%, 1) 0, transparent 57%),
      radial-gradient(at 99% 72%, hsla(322, 76%, 71%, 1) 0, transparent 51%),
      radial-gradient(at 10% 41%, hsla(62, 82%, 79%, 1) 0, transparent 47%),
      radial-gradient(at 12% 68%, hsla(11, 96%, 62%, 1) 0, transparent 43%),
      radial-gradient(at 66% 11%, hsla(29, 93%, 73%, 1) 0, transparent 59%),
      radial-gradient(at 84% 67%, hsla(243, 77%, 66%, 1) 0, transparent 59%);
  }
</style>
