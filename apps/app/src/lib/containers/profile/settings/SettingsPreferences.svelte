<script>
  import { IconChevronRight, IconBarbell, IconRuler2, IconLanguage, IconMoon } from "ui/icons";
  import SettingsButton from "./SettingsButton.svelte";
  import { route } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-muted-foreground text-sm font-light">Preferences</p>

  <div class="divide-border/50 bg-muted/75 grid grid-cols-1 divide-y rounded-lg px-4">
    <SettingsButton href={route("/profile/settings/workouts")}>
      {#snippet icon()}
        <IconBarbell />
      {/snippet}

      <p>Workouts</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/units")}>
      {#snippet icon()}
        <IconRuler2 />
      {/snippet}

      <p>Units</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/language")}>
      {#snippet icon()}
        <IconLanguage />
      {/snippet}

      <p>Language</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/theme")}>
      {#snippet icon()}
        <IconMoon />
      {/snippet}

      <p>Theme</p>
    </SettingsButton>
  </div>
</div>
