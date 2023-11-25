<script lang="ts">
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import AuthBase from "./AuthBase.svelte";
  import { page } from "$app/stores";

  import * as m from "$paraglide/messages";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { IconCustomGoogle, IconEye, IconEyeOff } from "ui/icons";
  import { UserFirebaseSchema } from "$lib/db/users/firebase/schemas";
  import type { FormattedZodError } from "$lib/typings/standard";
  import { formatZodError, gotoFrel } from "$lib/utils/functions";
  import { authLoginWithPassword } from "$lib/db/users/firebase/actions";
  import type { AuthError } from "$lib/db/users/firebase/types";

  let passwordShown = $state(false);
  let fieldErrors = $state<FormattedZodError>({});
  let authError = $state<AuthError | null>(null);
  let loading = $state(false);

  const togglePassword = (e: MouseEvent) => {
    e.preventDefault();
    passwordShown = !passwordShown;
  };

  const logIn = async (e: SubmitEvent) => {
    e.preventDefault();
    loading = true;
    fieldErrors = {};

    const formData = new FormData(e.target as HTMLFormElement);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const schemaRes = UserFirebaseSchema.safeParse(userData);

    if (!schemaRes.success) {
      fieldErrors = formatZodError(schemaRes.error);
      loading = false;
      return;
    }

    const authRes = await authLoginWithPassword(schemaRes.data.email, schemaRes.data.password);

    if (authRes.error) {
      authError = authRes.error;
    } else {
      await gotoFrel($page);
    }

    loading = false;
  };
</script>

<AuthBase>
  <form class="flex w-full flex-col items-center gap-8" onsubmit={logIn}>
    <h1 class="text-5xl font-black">
      {m.auth_login()}
    </h1>

    <div class="flex w-full flex-col gap-4">
      <Label class="flex w-full flex-col gap-1">
        <span>
          {m.auth_email()}
        </span>
        <Input
          type="email"
          class="placeholder:text-muted-foreground/50"
          name="email"
          placeholder={m.auth_email_placeholder()}
          autocomplete="email"
        />
      </Label>
      <Label class="flex w-full flex-col gap-1">
        <div class="flex justify-between">
          <span>
            {m.auth_password()}
          </span>
          <a href={PAGES.auth_forgot_password()} class="text-muted-foreground">
            {m.auth_forgot_password()}
          </a>
        </div>
        <div class="relative flex w-full items-center">
          <Input
            type={passwordShown ? "text" : "password"}
            class="placeholder:text-muted-foreground/50"
            name="password"
            placeholder={m.auth_password_placeholder()}
            autocomplete="current-password"
          />
          <Button
            size="icon"
            variant="ghost"
            class="hover:text-foreground absolute right-2 h-6 w-6 hover:bg-transparent"
            onclick={togglePassword}
            type="button"
          >
            {#if passwordShown}
              <IconEyeOff />
            {:else}
              <IconEye />
            {/if}
          </Button>
        </div>
      </Label>
    </div>

    <div class="flex w-full flex-col gap-2">
      <Button class="w-full">
        {m.auth_login_action()}
      </Button>
      <Button class="flex w-full gap-2" variant="secondary">
        <div class="h-5 w-5">
          <IconCustomGoogle />
        </div>
        {m.auth_login_action_with({ provider: "Google" })}
      </Button>
    </div>
  </form>
</AuthBase>

<Button
  variant="link"
  class="text-muted-foreground underline"
  href={PAGES.auth_register({ frel: $page.data.frel })}
>
  {m.auth_switch_to_register()}
</Button>
