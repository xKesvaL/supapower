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


<div class="pb-5">
    <SettingsCard {user}/>
</div>
<div class="py-5">
    <SettingsAccount />
</div>
<div class="py-5">
    <SettingsPreferences />
</div>
<div class="pt-5">
    <SettingsHelp />
</div>


