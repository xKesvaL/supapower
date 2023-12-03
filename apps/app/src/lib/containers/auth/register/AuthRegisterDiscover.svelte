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

<div class="flex flex-grow flex-col gap-4 py-4">
  <div class="bg-muted flex-grow">image</div>
  <h1 class="text-xl">Blabla best app</h1>
  <p class="text-muted-foreground text-sm">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, quasi. Explicabo ipsa,
    perferendis distinctio itaque similique quis pariatur? Dolor illum reprehenderit obcaecati
    voluptas tenetur. Voluptas animi ea consectetur autem minus.
  </p>
</div>

<Button class="w-full" onclick={onNext}>Get Started</Button>
<Button
  class="border-primary bg-card hover:bg-primary hover:text-primary-foreground w-full"
  variant="outline"
  href={route("/auth/login", { frel: $page.data.frel })}
>
  {m.auth_login_action()}
</Button>
