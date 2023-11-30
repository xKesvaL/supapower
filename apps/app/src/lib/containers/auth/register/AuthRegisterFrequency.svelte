<script lang="ts">
  import type { UserProfile } from "$lib/db/users/profile/types";
  import { USER_WORKOUT_FREQUENCIES } from "$lib/typings/user";
  import * as m from "$paraglide/messages";
  import AuthRegisterNextButton from "./AuthRegisterNextButton.svelte";
  import AuthRegisterSelectMultiple from "./AuthRegisterSelectMultiple.svelte";

  interface Props {
    onNext: () => void;
    children?: any;
    frequencies: UserProfile["workout"]["frequencies"];
  }

  let { onNext, frequencies } = $props<Props>();
  let disabled = $derived(frequencies.length === 0);
</script>

<AuthRegisterSelectMultiple
  title="frequencies"
  options={USER_WORKOUT_FREQUENCIES}
  bind:selected={frequencies}
/>

<AuthRegisterNextButton {onNext} {disabled} />
