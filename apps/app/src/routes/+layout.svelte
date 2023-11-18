<script lang="ts">
  import "@kesval/design";
  import "../app.postcss";
  import "$lib/styles/fonts.scss";
  import "$lib/styles/main.scss";
  import "$lib/styles/nprogress.scss";

  import nprogress from "nprogress";
  import { onMount } from "svelte";
  import { isLoading, locales } from "svelte-i18n";
  import { setupViewTransition } from "sveltekit-view-transition";

  import { navigating, page } from "$app/stores";
  import { BRAND } from "$lib/CONFIG";
  import { type DisplayMode, setDisplayMode, setOnline, setPromptEvent } from "$lib/utils/context";

  nprogress.configure({ easing: "ease", minimum: 0.2, speed: 600 });
  $: $navigating ? nprogress.start() : nprogress.done();

  // Path without lang
  let pathWithoutLang = $page.url.pathname.replace(`/${$page.params.lang}`, "") || "/";
  $: pathWithoutLang = $page.url.pathname.replace(`/${$page.params.lang}`, "") || "/";

  let online = true;
  let displayMode: DisplayMode = "browser";

  onMount(() => {
    window.matchMedia("(display-mode: standalone)").addEventListener("change", (event) => {
      displayMode = event.matches ? "standalone" : "browser";
    });
  });

  const onBeforeInstallPrompt = (event: Event) => {
    event.preventDefault();
    setPromptEvent(event);
  };

  const windowOnline = () => {
    online = true;
  };

  const windowOffline = () => {
    online = false;
  };

  $: setDisplayMode(displayMode);
  $: setOnline(online);

  setupViewTransition();
</script>

<svelte:window
  on:beforeinstallprompt={onBeforeInstallPrompt}
  on:online={windowOnline}
  on:offline={windowOffline}
/>

<svelte:head>
  <!-- Manifest -->
  <link rel="manifest" href="/manifest.webmanifest" />

  <!-- Preload fonts -->
  <link
    rel="preload"
    href="/fonts/Inter-300-Lat.woff2"
    as="font"
    crossorigin="anonymous"
    type="font/woff2"
  />
  <link
    rel="preload"
    href="/fonts/Inter-400-Lat.woff2"
    as="font"
    crossorigin="anonymous"
    type="font/woff2"
  />
  <link
    rel="preload"
    href="/fonts/Inter-700-Lat.woff2"
    as="font"
    crossorigin="anonymous"
    type="font/woff2"
  />
  <link
    rel="preload"
    href="/fonts/Poppins-900-Lat.woff2"
    as="font"
    crossorigin="anonymous"
    type="font/woff2"
  />

  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
  <meta name="msapplication-TileColor" content="#ffffff" />

  <link rel="apple-touch-icon" href="/images/logos/logo.png" />
  <link rel="apple-touch-startup-image" href="/images/logos/logo.png" />

  <!-- Disable darkreader -->
  <meta name="darkreader-lock" />

  <!-- Mobile -->
  <meta name="viewport" content="width=device-width" />

  <!-- Metas -->
  <meta name="robots" content="index, follow" />

  <!-- PWA Infos -->
  <meta name="theme-color" content={BRAND.color.primary} />
  <meta name="copyright" content={BRAND.author.name} />
  <meta name="og:site_name" content={BRAND.name} />

  <!-- Href langs -->
  <link href={pathWithoutLang} hreflang="x-default" rel="alternate" />
  {#each $locales as locale}
    <link
      href={`/${locale}${pathWithoutLang === "/" ? "" : pathWithoutLang}?owlang=true`}
      hreflang={locale}
      rel="alternate"
    />
  {/each}
</svelte:head>

{#if $isLoading}
  ...
{:else}
  <slot />
{/if}
