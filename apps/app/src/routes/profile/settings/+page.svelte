<script>
    import ProfileSettings from "$lib/containers/profile/settings/Settings.svelte";

    let user = {
        username: "Jordan",
    };
</script>

<ProfileSettings {user}/>