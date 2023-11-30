<script lang="ts">
  import type { UserProfile } from "$lib/db/users/profile/types";
  import { USER_WORKOUT_TYPES } from "$lib/typings/user";
  import * as m from "$paraglide/messages";
  import AuthRegisterNextButton from "./AuthRegisterNextButton.svelte";
  import AuthRegisterSelect from "./AuthRegisterSelect.svelte";

  interface Props {
    onNext: () => void;
    children?: any;
    goal: UserProfile["workout"]["type"] | null;
  }

  let { onNext, goal } = $props<Props>();
  let disabled = $derived(goal === null);
</script>

<AuthRegisterSelect title="goal" options={USER_WORKOUT_TYPES} bind:selected={goal} />

<AuthRegisterNextButton {onNext} {disabled} />
