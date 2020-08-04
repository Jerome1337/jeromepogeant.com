<script>
  import CloseFilled20 from "carbon-icons-svelte/lib/CloseFilled20";
  import Terminal20 from "carbon-icons-svelte/lib/Terminal20";
  import Command from "./Command.svelte";
  import Log from "./Log.svelte";
</script>

<div class="border border-solid border-gray-600 rounded-lg m-5">
  <div class="border-b border-solid border-gray-600 px-5 py-2 flex justify-between content-center">
    <p class="flex">
      <Terminal20/>
      jerome@{window.location.hostname}: ~
    </p>
    <CloseFilled20 />
  </div>
  <div class="p-5">
    <Command command="git clone https://github.com/Jerome1337/jeromepogeant.com" />
    <Log logs={[
      "Cloning into 'jeromepogeant.com'...",
      "remote: Reusing existing pack: 1857, done.",
      "remote: Total 1857 (delta 0), reused 0 (delta 0)",
      "Receiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.",
      "Resolving deltas: 100% (772/772), done.",
      "Checking connectivity... done."
      ]} />
    <Command />
  </div>
</div>
