<script>
  import { t } from 'svelte-i18n';
  import Fork24 from 'carbon-icons-svelte/lib/Fork24';
  import Link from './_shared/Link.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="flex justify-between flex-wrap bg-gray-800 text-gray-600 p-6">
  <p>
    {$t('made_with')} 🍺 {$t('in')}
    <Link
      href="https://www.google.com/maps/search/?api=1&amp;query=Lille%2C%20France"
      title="Lille {$t('on')} Google Map">
      Lille, France
    </Link>
    -
    <span class="font-bold">{currentYear}</span>
  </p>
  <div class="w-full md:w-auto flex justify-center">
    <Link href="https://github.com/Jerome1337/jeromepogeant.com" title="Fork me {$t('on')} Github">
      <Fork24 />
    </Link>
  </div>
</footer>
