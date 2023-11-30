<script lang="ts">
  import type { UserProfile } from "$lib/db/users/profile/types";
  import { USER_WORKOUT_EQUIPMENT } from "$lib/typings/user";
  import * as m from "$paraglide/messages";
  import AuthRegisterNextButton from "./AuthRegisterNextButton.svelte";
  import AuthRegisterSelect from "./AuthRegisterSelect.svelte";

  interface Props {
    onNext: () => void;
    children?: any;
    equipment: UserProfile["workout"]["equipment"] | null;
  }

  let { onNext, equipment } = $props<Props>();
  let disabled = $derived(equipment === null);
</script>

<AuthRegisterSelect title="equipment" options={USER_WORKOUT_EQUIPMENT} bind:selected={equipment} />

<AuthRegisterNextButton {onNext} {disabled} />
