<script lang="ts">
  import ProfileHeader from "$lib/containers/profile/ProfileHeader.svelte";
  import ProfileContent from "$lib/containers/profile/ProfileContent.svelte";
  import ProfileCards from "$lib/containers/profile/ProfileCards.svelte";

  interface User {
      username: string;
  }

  export let user: User;

</script>

<div class="container">
  <ProfileHeader />

  <ProfileContent {user}/>

  <ProfileCards />
</div>