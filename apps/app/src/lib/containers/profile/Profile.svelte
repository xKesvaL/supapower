<script lang="ts">
  import ProfileHeader from "$lib/containers/profile/ProfileHeader.svelte";
  import ProfileContent from "$lib/containers/profile/ProfileContent.svelte";
  import ProfileCards from "$lib/containers/profile/ProfileCards.svelte";

  interface User {
    username: string;
  }

  type Props = {
    user: User;
  };

  let { user } = $props<Props>();
</script>

<div class="container flex flex-col gap-2">
  <ProfileHeader />

  <ProfileContent {user} />

  <ProfileCards />
</div>
