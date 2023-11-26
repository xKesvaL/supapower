<script lang="ts">
  import { onDestroy } from "svelte";

  interface Props {
    defaultState: any;
    timer?: number;
  }

  let { defaultState, timer = 500 } = $props<Props>()

  let show = $state(false);
  const timeoutId = setTimeout(() => (show = true), timer);
  onDestroy(() => clearTimeout(timeoutId));
</script>

{#if show}
  <span class="loading" />
{:else}
  {@render defaultState()}
{/if}
