<script lang="ts">
  import { Switch } from "$lib/components/ui/switch";
  import { theme } from "$lib/stores/theme";
  import { IconMoon, IconSun } from "ui/icons";

  import { browser } from "$app/environment";

  let autoTheme = "light";
  let checked = $theme === "dark" || autoTheme === "dark";

  $: if (
    browser &&
    (localStorage.getItem("theme") === "auto" || document.documentElement.dataset.theme === "auto")
  ) {
    autoTheme = "dark";
  } else {
    autoTheme = "light";
  }
</script>

<div class="flex items-center gap-4 text-muted-foreground/75">
  <div class="h-6 w-6">
    {#if $theme === "dark" || autoTheme === "dark"}
      <IconMoon />
    {:else if $theme === "light" || autoTheme === "light"}
      <IconSun />
    {/if}
  </div>
  <Switch
    bind:checked
    onCheckedChange={(c) => {
      theme.set(c ? "dark" : "light");
    }}
  />
</div>
