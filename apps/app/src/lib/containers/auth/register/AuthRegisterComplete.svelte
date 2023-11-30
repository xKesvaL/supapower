<script lang="ts">
  import { page } from "$app/stores";
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";

  import * as m from "$paraglide/messages";

  interface Props {
    onNext: () => void;
    children?: any;
  }

  let { onNext } = $props<Props>();
</script>

complete

<Button class="w-full" onclick={onNext}>Get Started</Button>
