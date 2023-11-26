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

carousel showing how good the app is

<Button class="w-full" onclick={onNext}>Get Started</Button>
<Button
  class="border-primary bg-card hover:bg-primary hover:text-primary-foreground w-full"
  variant="outline"
  href={PAGES.auth_login({ frel: $page.data.frel })}
>
  {m.auth_login_action()}
</Button>
