<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as m from "$paraglide/messages";

  interface Props {
    onNext: () => void;
  }

  let { onNext } = $props<Props>();
</script>

<footer class="fixed bottom-0 left-0 right-0 px-4 py-2">
  <Button class="w-full" onclick={onNext}>
    {m.next()}
  </Button>
</footer>

<style>
  footer {
    background: hsl(var(--base-100));
  }
</style>
