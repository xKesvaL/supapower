<script>
  import { IconChevronRight, IconBarbell, IconRuler2, IconLanguage, IconMoon } from "ui/icons";
  import SettingsButton from "./SettingsButton.svelte";
  import { PAGES } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Preferences</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <SettingsButton href={PAGES.profile_settings_workouts()}>
      {#snippet icon()}
        <IconBarbell />
      {/snippet}

      <p>Workouts</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_units()}>
      {#snippet icon()}
        <IconRuler2 />
      {/snippet}

      <p>Units</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_language()}>
      {#snippet icon()}
        <IconLanguage />
      {/snippet}

      <p>Language</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_theme()}>
      {#snippet icon()}
        <IconMoon />
      {/snippet}

      <p>Theme</p>
    </SettingsButton>
  </div>
</div>
