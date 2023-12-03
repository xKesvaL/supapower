<script lang="ts">
  import { getUser } from "$lib/utils/context";

  const user = getUser();
</script>

{#if user && !user.loading && user.user}
  <slot />
{/if}
