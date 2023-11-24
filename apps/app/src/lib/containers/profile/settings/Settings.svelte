<script lang="ts">
  import SettingsCard from "$lib/containers/profile/settings/SettingsCard.svelte";
  import SettingsAccount from "$lib/containers/profile/settings/SettingsAccount.svelte";
  import SettingsPreferences from "$lib/containers/profile/settings/SettingsPreferences.svelte";
  import SettingsHelp from "$lib/containers/profile/settings/SettingsHelp.svelte";

  interface User {
    username: string;
    email: string;
    date: string;
  }

  export let user: User;
</script>

<section class="flex flex-col gap-8">
  <SettingsCard {user} />
  <SettingsAccount />
  <SettingsPreferences />
  <SettingsHelp />
</section>
