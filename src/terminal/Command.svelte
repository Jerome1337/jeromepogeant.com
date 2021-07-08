<script>
  import StopFilledAlt20 from "carbon-icons-svelte/lib/StopFilledAlt20";

  export let command;
</script>

<style>
  div::before {
    content: '$ ';
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    animation: write-animation 5s both;
    width: 50%;
  }

  .cursor {
    border-right-width: 2px;
    border-right-style: solid;
    @apply border-gray-600;
    padding-right: 10px;
  }

  .blinking {
    animation: blink-animation 1s steps(2, start) infinite;
  }

  @keyframes write-animation {
    0% {
      width: 0;
    }
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
</style>

{#if command}
  <div>
    <p class="inline-flex cursor">{command}</p>
  </div>
{:else}
  <div>
    <span class="cursor blinking"></span>
  </div>
{/if}
