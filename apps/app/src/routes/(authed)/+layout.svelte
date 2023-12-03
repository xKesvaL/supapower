<script lang="ts">
  import { getUser, getUserProfile } from "$lib/utils/context";

  const user = getUser();
  const userProfile = getUserProfile();
</script>

{#if user && !user.loading && user.user && userProfile && !userProfile.loading && userProfile.doc}
  <slot />
{/if}
