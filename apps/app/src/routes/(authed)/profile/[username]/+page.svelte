<script lang="ts">
  import Profile from "$lib/containers/profile/Profile.svelte";

  let user = {
    username: "Jordan"
  };

</script>

<Profile {user}/>