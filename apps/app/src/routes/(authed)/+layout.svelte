<script lang="ts">
  import type { UserProfile } from "$lib/db/users/profile/types";
  import { getUser, setUserProfile } from "$lib/utils/context";
  import { firestore } from "$lib/utils/firebase";
  import { DocState } from "firebase-svelte";

  const userState = getUser();

  let userProfile = new DocState<UserProfile>(
    firestore,
    `users/${userState.user?.uid}/profile/data`,
  );

  $effect(() => {
    setUserProfile(userProfile);
  });
</script>

{#if userState && !userState.loading && userState.user && userProfile && !userProfile.loading && userProfile.doc}
  <slot />
{/if}
