<script>
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import AuthBase from "./AuthBase.svelte";
  import { page } from "$app/stores";

  import * as m from "$paraglide/messages";
</script>

<AuthBase>login</AuthBase>

<Button variant="link" class="text-muted-foreground underline" href={PAGES.auth_login({ frel: $page.data.frel })}>
  {m.auth_switch_to_login()}
</Button>
