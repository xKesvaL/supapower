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
  import { PAGES } from "$lib/ROUTES";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Help</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <SettingsButton href={PAGES.profile_settings_q_and_a()}>
      {#snippet icon()}
        <IconQuestionMark />
      {/snippet}

      <p>FAQ</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_contact()}>
      {#snippet icon()}
        <IconPhone />
      {/snippet}

      <p>Contact</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_legal()}>
      {#snippet icon()}
        <IconGavel />
      {/snippet}

      <p>Legal</p>
    </SettingsButton>
    <SettingsButton href={PAGES.profile_settings_app()}>
      {#snippet icon()}
        <IconInfoCircle />
      {/snippet}

      <p>App infos</p>
    </SettingsButton>
  </div>
</div>

<Button
  variant="destructive"
  class="border border-destructive bg-transparent py-6 text-destructive hover:text-foreground"
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
