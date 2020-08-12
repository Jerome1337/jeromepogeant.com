<script>
  import { isDarkTheme } from '../../stores';

  export let href;
  export let title;
</script>

<a
  {href}
  target="_blank"
  {title}
  class="font-bold hover:underline fill-current hover:text-{$isDarkTheme ? 'gold' : 'blue-dark'}">
  <slot />
</a>
