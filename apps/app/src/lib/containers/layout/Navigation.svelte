<script lang="ts">
  import { page } from "$app/stores";

  import { PAGES } from "$lib/ROUTES";
  import { IconBarbell, IconHome, IconSoup, IconTool, IconUser } from "ui/icons";

  import * as m from "$paraglide/messages";
  import NavigationLink from "./NavigationLink.svelte";
</script>

<nav
  class="fixed bottom-0 left-0 right-0 z-10 flex h-12 items-center justify-around lg:sticky lg:bottom-auto lg:right-auto lg:top-0 lg:h-screen lg:min-w-[12rem] lg:flex-col lg:items-start lg:justify-start"
>
  <NavigationLink href={PAGES._ROOT()} startsWith={false}>
    {#snippet icon()}
      <IconHome />
    {/snippet}
    <span>{m.home_title()}</span>
  </NavigationLink>

  <a href={PAGES.nutrition()} class:active={$page.url.pathname.startsWith(PAGES.nutrition())}>
    <div class="icon">
      <IconSoup />
    </div>
    <span>{m.nutrition_title()}</span>
  </a>
  <a href={PAGES.train()} class:active={$page.url.pathname.startsWith(PAGES.train())}>
    <div class="icon">
      <IconBarbell />
    </div>
    <span>{m.train_title()}</span>
  </a>
  <a href={PAGES.profile()} class:active={$page.url.pathname.startsWith(PAGES.profile())}>
    <div class="icon">
      <IconUser />
    </div>
    <span>{m.profile_title()}</span>
  </a>
  <!-- {#if $userData.type === 'admin'}
		<a href={PAGES.admin()} class:active={$page.url.pathname.startsWith(PAGES.admin())}>
			<div class="icon">
				<IconTool />
			</div>
			<span>{m.admin_title()}</span>
		</a>
	{/if} -->
</nav>

<style lang="scss">
  nav {
    view-transition-name: navigation;
    background: hsl(var(--base-100));
    box-shadow: 0 -1px 4px hsl(var(--base-200));
  }
</style>
