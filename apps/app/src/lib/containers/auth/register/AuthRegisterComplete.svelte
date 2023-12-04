<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { zxcvbn } from "@zxcvbn-ts/core";

  import * as m from "$paraglide/messages";
  import { Label } from "$lib/components/ui/label";
  import type { FormattedZodError } from "$lib/typings/standard";
  import type { AuthError } from "$lib/db/users/firebase/types";
  import { getI18n } from "$lib/utils/functions";
  import { blur } from "svelte/transition";
  import { IconCheck, IconCustomGoogle, IconEye, IconEyeOff, IconX } from "ui/icons";
  import { Loader } from "ui/components";
  import type { AuthProvider } from "$lib/utils/firebase";
  import type { FormEventHandler } from "svelte/elements";
  import { isUsernameUnique } from "$lib/db/users/profile/actions";
  import PasswordStrength from "../PasswordStrength.svelte";

  interface Props {
    onFinish: (type: AuthProvider) => Promise<void>;
    credentials: {
      email: string;
      password: string;
    };
    authState: {
      loading: boolean;
      authError: AuthError | null;
      fieldErrors: FormattedZodError;
    };
    username: string;
  }

  let { onFinish, credentials, authState, username } = $props<Props>();

  let { loading, authError, fieldErrors } = authState;

  let passwordStrength = $derived(zxcvbn(credentials.password));
  let passwordShown = $state(false);
  let usernameLoading = $state(false);
  let usernameUnique = $state(false);
  let usernameError = $state<string | null>(null);
  let userTimer = $state<NodeJS.Timeout>();

  let valid = $derived(
    usernameUnique &&
      !loading &&
      !usernameLoading &&
      credentials.email.length > 3 &&
      passwordStrength.score >= 2,
  );

  const checkUsername: FormEventHandler<HTMLInputElement> = async (e) => {
    let usernameValue = e.currentTarget.value;
    clearTimeout(userTimer);
    usernameUnique = false;
    usernameLoading = true;
    usernameError = null;

    if (!usernameValue || usernameValue.length <= 3) {
      usernameLoading = false;
      usernameError = m.auth_username_error_too_short();
      return;
    }

    userTimer = setTimeout(async () => {
      if (await isUsernameUnique(usernameValue.toLowerCase())) {
        usernameUnique = true;
        usernameLoading = false;
        return;
      } else {
        usernameUnique = false;
        usernameLoading = false;
        usernameError = m.auth_username_error_taken();
        return;
      }
    }, 750);

    return;
  };

  const togglePassword = (e: MouseEvent) => {
    e.preventDefault();
    passwordShown = !passwordShown;
  };

  const onSignIn = async (e: SubmitEvent) => {
    e.preventDefault();

    await onFinish("credentials");
  };

  const onSignInGoogle = async () => await onFinish("google");

  $inspect(passwordStrength);
</script>

<form class="flex w-full flex-col items-center gap-8" onsubmit={onSignIn}>
  <h1 class="mt-8 text-5xl font-black">
    {m.auth_register()}
  </h1>

  <div class="flex w-full flex-col gap-4">
    <Label class="flex w-full flex-col gap-1">
      <span>
        {m.auth_username()}
      </span>
      <div class="relative flex w-full items-center">
        <Input
          type="text"
          class="placeholder:text-muted-foreground/50"
          name="username"
          placeholder={m.auth_username_placeholder()}
          autocomplete="username"
          bind:value={username}
          oninput={checkUsername}
        />
        {#if usernameLoading}
          <span class="loading absolute right-2 h-6 w-6" />
        {:else if usernameUnique}
          <span class="text-success absolute right-2 h-6 w-6">
            <IconCheck />
          </span>
        {:else}
          <span class="text-destructive absolute right-2 h-6 w-6">
            <IconX />
          </span>
        {/if}
      </div>
      {#if usernameError}
        <span class="error" transition:blur={{ duration: 300 }}>
          {usernameError}
        </span>
      {/if}
    </Label>
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
        bind:value={credentials.email}
      />
      {#if fieldErrors.email}
        <span class="error" transition:blur={{ duration: 300 }}>
          {getI18n(fieldErrors.email.message)}
        </span>
      {/if}
    </Label>
    <Label class="flex w-full flex-col gap-1">
      <span>
        {m.auth_password()}
      </span>
      <div class="relative flex w-full items-center">
        <Input
          type={passwordShown ? "text" : "password"}
          class="placeholder:text-muted-foreground/50"
          name="password"
          placeholder={m.auth_password_placeholder()}
          autocomplete="current-password"
          bind:value={credentials.password}
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
      <PasswordStrength {passwordStrength} />
      {#if credentials.password.length > 6 && passwordStrength.score < 2}
        <span class="error" transition:blur={{ duration: 300 }}>
          {m.auth_password_error_weak()}
        </span>
      {:else if fieldErrors.password}
        <span class="error" transition:blur={{ duration: 300 }}>
          {getI18n(fieldErrors.password.message)}
        </span>
      {/if}
    </Label>
  </div>

  <div class="flex w-full flex-col gap-2">
    {#snippet defaultState()}
      {m.auth_register_action()}
    {/snippet}
    <Button class="w-full" type="submit" disabled={loading || !valid}>
      {#if loading}
        <Loader {defaultState} />
      {:else}
        {@render defaultState()}
      {/if}
    </Button>
    <Button class="flex w-full gap-2" variant="secondary" onclick={onSignInGoogle}>
      <div class="h-5 w-5">
        <IconCustomGoogle />
      </div>
      {m.auth_register_action_with({ provider: "Google" })}
    </Button>
    {#if authError}
      <span class="error text-center" transition:blur={{ duration: 300 }}
        >{getI18n(authError.code)}</span
      >
    {/if}
  </div>
</form>
