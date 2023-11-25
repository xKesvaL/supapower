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
  <NavigationLink href={PAGES._ROOT()} active={$page.url.pathname === PAGES._ROOT()}>
    {#snippet icon()}
      <IconHome />
    {/snippet}
    <span>{m.home_title()}</span>
  </NavigationLink>

  <NavigationLink
    href={PAGES.nutrition()}
    active={$page.url.pathname.startsWith(PAGES.nutrition())}
  >
    {#snippet icon()}
      <IconSoup />
    {/snippet}
    <span>{m.nutrition_title()}</span>
  </NavigationLink>

  <NavigationLink href={PAGES.train()} active={$page.url.pathname.startsWith(PAGES.train())}>
    {#snippet icon()}
      <IconBarbell />
    {/snippet}
    <span>{m.train_title()}</span>
  </NavigationLink>

  <NavigationLink href={PAGES.profile()} active={$page.url.pathname.startsWith(PAGES.profile())}>
    {#snippet icon()}
      <IconUser />
    {/snippet}
    <span>{m.profile_title()}</span>
  </NavigationLink>

  <!-- {#if $userData.type === 'admin'}
    <NavigationLink href={PAGES.admin()} active={$page.url.pathname.startsWith(PAGES.admin())}>
      {#snippet icon()}
        <IconTool />
      {/snippet}
      <span>{m.admin_title()}</span>
    </NavigationLink>
  {/if} -->

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
