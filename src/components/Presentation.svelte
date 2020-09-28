<script>
  import { t } from 'svelte-i18n';
  import LogoLinkedin24 from 'carbon-icons-svelte/lib/LogoLinkedin24';
  import LogoTwitter24 from 'carbon-icons-svelte/lib/LogoTwitter24';
  import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub24';
  import LogoKeybase24 from 'carbon-icons-svelte/lib/LogoKeybase24';
  import Link from './_shared/Link.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-24">
  <section class="flex items-center justify-center">
    <img src="profile_picture.jpg" alt="{$t('alt.profile_picture')}" class="h-48 md:h-64 rounded-full" />
  </section>
  <section class="flex flex-col justify-center">
    <h1 class="text-4xl">Jérôme Pogeant</h1>
    <h2 class="text-2xl italic">{$t('full_stack_engineer')}</h2>
    <section class="my-8">
      <p class="my-3">
        {$t('currently')}
        {$t('full_stack_engineer')}
        <Link href="https://twitter.com/atos" title="{$t('title.profile', { values: { name: 'Atos Twitter' } })}">
          @Atos
        </Link>
        {$t('in')}
        <Link
          href="https://www.google.com/maps/search/?api=1&query=Lille%2C%20France"
          title="Lille {$t('on')} Google Map">
          Lille, France
        </Link>
      </p>
      <p class="my-3">
        Ex
        {$t('full_stack_developer')}
        <Link href="https://twitter.com/Nexylan" title="{$t('title.profile', { values: { name: 'Nexylan Twitter' } })}">
          @Nexylan
        </Link>
        {$t('in')}
        <Link
          href="https://www.google.com/maps/search/?api=1&aquery=Marcq-en-Barœul%2C%20France"
          title="Marcq-en-Barœul {$t('on')} Google Map">
          Marcq-en-Barœul, France
        </Link>
      </p>
      <p class="my-3">
        {$t('co_founder_of')}
        <Link
          href="https://github.com/Lille-Gophers"
          title="{$t('title.profile', { values: { name: 'Lille Gophers GitHub' } })}">
          Lille Gophers
        </Link>
      </p>
    </section>
    <p class="mb-3">{$t('socials')}</p>
    <div class="flex flex-row gap-4">
      <Link
        href="https://www.linkedin.com/in/jeromepogeant/"
        title="{$t('title.profile', { values: { name: 'LinkedIn' } })}">
        <LogoLinkedin24 />
      </Link>
      <Link href="https://twitter.com/jeromepogeant" title="{$t('title.profile', { values: { name: 'Twitter' } })}">
        <LogoTwitter24 />
      </Link>
      <Link href="https://github.com/Jerome1337" title="{$t('title.profile', { values: { name: 'GitHub' } })}">
        <LogoGithub24 />
      </Link>
      <Link href="https://keybase.io/jerome1337" title="{$t('title.profile', { values: { name: 'Keybase' } })}">
        <LogoKeybase24 />
      </Link>
    </div>
  </section>
</div>
