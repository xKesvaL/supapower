<script>
    import ProfileSettings from "$lib/containers/profile/settings/Settings.svelte";

    let user = {
        username: "Jordan",
        email: "jabeddou@gmail.com",
        date: "Aug 2023"
    };
</script>

<div class="container">
    <ProfileSettings {user}/>
</div>
