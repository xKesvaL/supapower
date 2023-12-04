<script>
  import { Button } from "$lib/components/ui/button";
  import {
    IconChevronRight,
    IconQuestionMark,
    IconPhone,
    IconGavel,
    IconInfoCircle,
    IconLogout,
  } from "ui/icons";
  import SettingsButton from "./SettingsButton.svelte";
  import { route } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-muted-foreground text-sm font-light">Help</p>

  <div class="divide-border/50 bg-muted/75 grid grid-cols-1 divide-y rounded-lg px-4">
    <SettingsButton href={route("/profile/settings/q-and-a")}>
      {#snippet icon()}
        <IconQuestionMark />
      {/snippet}

      <p>FAQ</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/contact")}>
      {#snippet icon()}
        <IconPhone />
      {/snippet}

      <p>Contact</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/legal")}>
      {#snippet icon()}
        <IconGavel />
      {/snippet}

      <p>Legal</p>
    </SettingsButton>
    <SettingsButton href={route("/profile/settings/app")}>
      {#snippet icon()}
        <IconInfoCircle />
      {/snippet}

      <p>App infos</p>
    </SettingsButton>
  </div>
</div>

<Button
  variant="destructive"
  class="border-destructive text-destructive hover:text-foreground border bg-transparent py-6"
>
  <div class="flex items-center gap-3">
    <div class="w-6">
      <IconLogout />
    </div>
    <div class="text-lg">
      <p>Logout</p>
    </div>
  </div>
</Button>
