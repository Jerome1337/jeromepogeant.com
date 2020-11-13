<script>
  import { isDarkTheme } from '../../stores';

  export let href;
  export let title;
</script>

<a
  {href}
  target="_blank"
  {title}
  rel="noreferrer"
  class="font-bold hover:underline fill-current {$isDarkTheme ? 'hover:text-gold' : 'hover:text-blue-dark'}">
  <slot />
</a>
