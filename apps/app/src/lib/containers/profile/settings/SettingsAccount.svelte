<script>
  import { IconChevronRight, IconUser, IconCirclesRelation, IconBell } from "ui/icons";
  import SettingsButton from "./SettingsButton.svelte";
  import { route } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-muted-foreground text-sm font-light">Account</p>

  <div class="divide-border/50 bg-muted/75 grid grid-cols-1 divide-y rounded-lg px-4">
    <SettingsButton href={route("/profile/settings/profile")}>
      {#snippet icon()}
        <IconUser />
      {/snippet}

      <p>Profile</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/connections")}>
      {#snippet icon()}
        <IconCirclesRelation />
      {/snippet}

      <p>Connections</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/notifications")}>
      {#snippet icon()}
        <IconBell />
      {/snippet}

      <p>Notifications</p>
    </SettingsButton>
  </div>
</div>
