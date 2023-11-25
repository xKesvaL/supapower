<script lang="ts">
  import { onDestroy } from "svelte";

  interface Props {
    defaultState: any
  }

  let { defaultState } = $props<Props>()

  let show = $state(false);
  const timeoutId = setTimeout(() => (show = true), 400);
  onDestroy(() => clearTimeout(timeoutId));
</script>

{#if show}
  <span class="loading" />
{:else}
  {@render defaultState()}
{/if}
