<script>
  import { IconChevronRight, IconUser, IconCirclesRelation, IconBell } from "ui/icons";
  import SettingsButton from "./SettingsButton.svelte";
  import { PAGES } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Account</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <SettingsButton href={PAGES.profile_settings_profile()}>
      {#snippet icon()}
        <IconUser />
      {/snippet}

      <p>Profile</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_connections()}>
      {#snippet icon()}
        <IconCirclesRelation />
      {/snippet}

      <p>Connections</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_notifications()}>
      {#snippet icon()}
        <IconBell />
      {/snippet}

      <p>Notifications</p>
    </SettingsButton>
  </div>
</div>
