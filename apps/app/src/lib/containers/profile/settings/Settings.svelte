<script lang="ts">
    import SettingsCard from "$lib/containers/profile/settings/SettingsCard.svelte";
    import SettingsAccount from "$lib/containers/profile/settings/SettingsAccount.svelte";
    import SettingsPreferences from "$lib/containers/profile/settings/SettingsPreferences.svelte";
    import SettingsHelp from "$lib/containers/profile/settings/SettingsHelp.svelte";

    interface User {
        username: string;
    }

    export let user: User;
</script>

<div class="container">
    <SettingsCard {user}/>

    <SettingsAccount />

    <SettingsPreferences />

    <SettingsHelp />
</div>