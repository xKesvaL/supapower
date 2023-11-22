<script>
  import { page } from "$app/stores";
  import ProfileHeader from "$lib/containers/profile/ProfileHeader.svelte";
  import ProfileContent from "$lib/containers/profile/ProfileContent.svelte";
  import ProfileCards from "$lib/containers/profile/ProfileCards.svelte";
</script>

<div class="flex w-full flex-col justify-center">
  <ProfileHeader />

  <ProfileContent />

  <ProfileCards />

  <!-- DASHBOARD -->
</div>
