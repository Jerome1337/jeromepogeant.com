<script>
  export let href;
  export let title;
</script>

<a {href} target="_blank" {title} class="font-bold hover:underline fill-current hover:text-yellow-600">
  <slot />
</a>
