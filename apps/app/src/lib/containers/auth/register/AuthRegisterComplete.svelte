<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { zxcvbn, type TranslationKeys } from "@zxcvbn-ts/core";

  type Warning = keyof TranslationKeys["warnings"];
  type Suggestion = keyof TranslationKeys["suggestions"];

  import * as m from "$paraglide/messages";

  interface Props {
    onFinish: () => void;
    children?: any;
    credentials: {
      email: string;
      password: string;
    };
  }

  let { onFinish, credentials } = $props<Props>();

  let passwordStrength = $derived(zxcvbn(credentials.password));
  let passwordShown = $state(false);
  let passwordConfirmation = $state("");

  $inspect(passwordStrength);
</script>

<form class="flex flex-grow flex-col" onsubmit={onFinish}>
  <Input type="email" name="email" bind:value={credentials.email} />
  <Input
    type="password"
    name="password"
    autocomplete="new-password"
    bind:value={credentials.password}
  />
  <Input
    type="password"
    name="password-confirmation"
    autocomplete="none"
    bind:value={passwordConfirmation}
  />
  <Button class="w-full">Register</Button>
</form>
