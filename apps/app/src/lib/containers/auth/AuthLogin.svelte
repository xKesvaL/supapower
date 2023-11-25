<script>
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import AuthBase from "./AuthBase.svelte";

  import * as m from "$paraglide/messages";
</script>

<AuthBase>login</AuthBase>

<Button variant="link" class="text-muted-foreground underline" href={PAGES.auth_register()}>
  Don't have an account? Register here.
</Button>
