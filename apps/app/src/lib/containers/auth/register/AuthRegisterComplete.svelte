<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";

  import * as m from "$paraglide/messages";

  interface Props {
    onNext: () => void;
    children?: any;
  }

  let { onNext } = $props<Props>();
</script>

<div class="flex flex-grow flex-col">cc</div>

<Button class="w-full" onclick={onNext}>Get Started</Button>
