<script lang="ts">
  import Profile from "$lib/containers/profile/Profile.svelte";

  let user = {
    username: "kesval",
  };
</script>

<Profile {user} />
