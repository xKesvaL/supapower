<script lang="ts">
  import { IconArrowUpLeft } from "ui/icons";

  import { Button } from "$lib/components/ui/button";
  import { route } from "$lib/ROUTES";
  import { navigationOpen } from "$lib/stores/common";

  import Socials from "../../components/base/Socials.svelte";
  import HeaderLink from "./HeaderLink.svelte";
  import HeaderMenuButton from "./HeaderMenuButton.svelte";
  import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<header>
  <div
    class="container flex items-center justify-between gap-4 lg:my-6 lg:grid lg:grid-cols-[auto,1fr,auto] lg:gap-10"
    style="view-transition-name: header;"
  >
    <a class="font-title text-2xl lg:border-r lg:py-2 lg:pr-12" href={route("/")}
      >LeetStrength</a
    >
    <div
      class="lg:0 bg-card fixed inset-0 z-10 flex flex-col justify-between gap-12 p-4 transition-transform duration-500 lg:relative lg:flex-row {$navigationOpen
        ? 'translate-x-0'
        : '-translate-x-full'} lg:translate-x-0 lg:bg-transparent"
    >
      <div
        class="lg:justfiy-start flex flex-grow flex-col items-center justify-center gap-12 lg:flex-grow-0 lg:flex-row"
      >
        <HeaderLink href={route("/features")}>Features</HeaderLink>
        <HeaderLink href={route("/pricing")}>Pricing</HeaderLink>
        <HeaderLink href={route('/about')}>About</HeaderLink>
      </div>
      <div class="flex flex-col gap-4">
        <Button class="gap-2 lg:hidden">
          Join Waitlist

          <div class="h-6 w-6">
            <IconArrowUpLeft />
          </div>
        </Button>
        <div class="flex items-center justify-between lg:justify-center lg:gap-12">
          <Socials />
          <ThemeSwitch />
        </div>
      </div>
    </div>
    <div class="ml-auto flex items-center gap-2 lg:ml-0">
      <Button class="hidden lg:flex lg:gap-2 lg:rounded-full lg:text-sm">
        Join Waitlist
        <div class="h-4 w-4">
          <IconArrowUpLeft />
        </div>
      </Button>
      <HeaderMenuButton />
    </div>
  </div>
</header>
