<script lang="ts">
  import "@kesval/design";
  import "../app.postcss";
  import "$lib/styles/fonts.scss";
  import "$lib/styles/main.scss";
  import "$lib/styles/nprogress.scss";

  // ! TODO: Set lang based on firebase user data
  import nprogress from "nprogress";
  import { onDestroy, onMount } from "svelte";
  import { setupViewTransition } from "sveltekit-view-transition";

  import { goto, preloadCode } from "$app/navigation";
  import { navigating, page } from "$app/stores";
  import { BRAND } from "$lib/CONFIG";
  import { PAGES } from "$lib/ROUTES";
  import {
    type DisplayMode,
    setDisplayMode,
    setOnline,
    setPromptEvent,
    setUser,
  } from "$lib/utils/context";
  import { auth } from "$lib/utils/firebase";
  import { UserState } from "firebase-svelte";
  import { signInAnonymously, signOut } from "firebase/auth";
  import { browser } from "$app/environment";

  nprogress.configure({ easing: "ease", minimum: 0.2, speed: 600 });
  $effect(() => {
    $navigating ? nprogress.start() : nprogress.done();
  });

  let online = true;
  let displayMode: DisplayMode = "browser";

  onMount(() => {
    window.matchMedia("(display-mode: standalone)").addEventListener("change", (event) => {
      displayMode = event.matches ? "standalone" : "browser";
    });

    preloadCode(PAGES._ROOT(), PAGES.nutrition(), PAGES.train(), PAGES.profile());
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

  $effect(() => setDisplayMode(displayMode));
  $effect(() => setOnline(online));

  setupViewTransition();

  let userState = new UserState(auth);

  $effect(() => {
    setUser(userState);

    if (
      browser &&
      !userState.loading &&
      !userState.user &&
      !$page.url.pathname.startsWith(PAGES.auth())
    ) {
      goto(PAGES.auth_login({ frel: $page.url.pathname }));
    }
  });
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
  <link href={$page.url.pathname} hreflang="x-default" rel="alternate" />
</svelte:head>

<slot />
