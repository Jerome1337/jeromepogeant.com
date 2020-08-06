<script>
  export let href, title;
</script>

<a
  href={href}
  target="_blank"
  title={title}
  class="font-bold hover:underline fill-current hover:text-yellow-600"
>
  <slot></slot>
</a>
