<script lang="ts">
  import { isDarkTheme } from '../../stores';

  export let href: string;
  export let title: string;
</script>

<a
  {href}
  target="_blank"
  {title}
  rel="noreferrer"
  class="font-bold hover:underline fill-current {$isDarkTheme ? 'hover:text-gold' : 'hover:text-blue-dark'}"
>
  <slot />
</a>
