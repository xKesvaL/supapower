<script lang="ts">
  import * as m from "$paraglide/messages";
  import AuthRegisterNextButton from "./AuthRegisterNextButton.svelte";

  interface Props {
    onNext: () => void;
    children?: any;
  }

  let { onNext } = $props<Props>();
</script>

goal

<AuthRegisterNextButton {onNext} />
