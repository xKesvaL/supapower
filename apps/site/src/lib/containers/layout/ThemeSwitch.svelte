<script lang="ts">
  import { IconMoon, IconSun } from "ui/icons";

  import { browser } from "$app/environment";
  import { Switch } from "$lib/components/ui/switch";
  import { theme } from "$lib/stores/theme";

  let autoTheme = "light";
  let checked = $theme === "dark" || autoTheme === "dark";

  $: autoTheme =
    browser &&
    (localStorage.getItem("theme") === "auto" || document.documentElement.dataset.theme === "auto")
      ? "dark"
      : "light";
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
    onCheckedChange={(isChecked) => {
      theme.set(isChecked ? "dark" : "light");
    }}
  />
</div>
