<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  let i = 0;
  const showLogs = () => {
    if (i < logs.length) {
      setTimeout(() => {
        ++i;
        showLogs();
      }, 100);
    }
  }

  onMount(() => {
    showLogs();
  });

  export let logs = [];
</script>

<p class="py-4">
  {#each logs.slice(0, i) as log}
    <span transition:slide="{{duration: 50, delay: 1500, opacity: 0.5, start: 0.5, easing: sineIn}}" class="block">{log}</span>
  {/each}
</p>
