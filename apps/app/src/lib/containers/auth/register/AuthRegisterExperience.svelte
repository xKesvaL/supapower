<script lang="ts">
  import type { UserProfile } from "$lib/db/users/profile/types";
  import { USER_WORKOUT_EXPERIENCE } from "$lib/typings/user";
  import * as m from "$paraglide/messages";
  import AuthRegisterNextButton from "./AuthRegisterNextButton.svelte";
  import AuthRegisterSelect from "./AuthRegisterSelect.svelte";

  interface Props {
    onNext: () => void;
    children?: any;
    experience: UserProfile["workout"]["experience"] | null;
  }

  let { onNext, experience } = $props<Props>();
  let disabled = $derived(experience === null);
</script>

<AuthRegisterSelect
  title="experience"
  options={USER_WORKOUT_EXPERIENCE}
  bind:selected={experience}
/>

<AuthRegisterNextButton {onNext} {disabled} />
