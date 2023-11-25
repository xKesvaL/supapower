<script>
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import AuthBase from "./AuthBase.svelte";
</script>

<AuthBase>login</AuthBase>

<Button variant="link" class="text-muted-foreground underline" href={PAGES.auth_login()}>
  Already have an account? Sign in
</Button>
