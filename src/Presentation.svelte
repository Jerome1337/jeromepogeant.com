<script>
  import LogoLinkedin24 from 'carbon-icons-svelte/lib/LogoLinkedin24';
  import LogoTwitter24 from 'carbon-icons-svelte/lib/LogoTwitter24';
  import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub24';
  import Link from './_shared/Link.svelte';
  import LogoKeybase24 from '../public/LogoKeybase24.svg';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-24">
  <section class="flex items-center justify-center">
    <img src="profile_picture.jpg" alt="Jérôme Profile Picture" aria-hidden class="h-48 md:h-64 rounded-full" />
  </section>
  <section class="flex flex-col justify-center">
    <h1 class="text-4xl">Jérôme Pogeant</h1>
    <h2 class="text-2xl italic">Full Stack Engineer</h2>
    <section class="my-8">
      <p class="my-3">
        Currently Full Stack Engineer
        <Link href="https://twitter.com/atos" title="Atos Twitter Profile">@Atos</Link>
        in
        <Link href="https://www.google.com/maps/search/?api=1&amp;query=Lille%2C%20France" title="Lille on Google Map">
          Lille, France
        </Link>
      </p>
      <p class="my-3">
        Ex Full Stack Developer
        <Link href="https://twitter.com/Nexylan" title="Nexylan Twitter Profile">@Nexylan</Link>
        in
        <Link
          href="https://www.google.com/maps/search/?api=1&amp;aquery=Marcq-en-Barœul%2C%20France"
          title="Marcq-en-Barœul on Google Map">
          Marcq-en-Barœul, France
        </Link>
      </p>
      <p class="my-3">
        Co-founder of
        <Link href="https://github.com/Lille-Gophers" title="Lille Gophers GitHub Profile">Lille Gophers</Link>
      </p>
    </section>
    <p class="mb-3">Socials:</p>
    <div class="flex flex-row gap-4">
      <Link href="https://www.linkedin.com/in/jeromepogeant/" title="LinkedIn Profile">
        <LogoLinkedin24 />
      </Link>
      <Link href="https://twitter.com/jeromepogeant" title="Twitter Profile">
        <LogoTwitter24 />
      </Link>
      <Link href="https://github.com/Jerome1337" title="GitHub Profile">
        <LogoGithub24 />
      </Link>
      <Link href="https://keybase.io/jerome1337" title="Keybase Profile">
        <LogoKeybase24 height="24" />
      </Link>
    </div>
  </section>
</div>
