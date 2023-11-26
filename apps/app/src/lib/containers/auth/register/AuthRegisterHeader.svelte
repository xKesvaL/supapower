<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { getI18n } from "$lib/utils/functions";
  import { IconArrowLeft } from "ui/icons";

  interface Props {
    onPrevious: () => void;
    name: string;
  }

  let { onPrevious, name } = $props<Props>();
</script>

<header class="page-header">
  <Button
    size="icon"
    class="text-foreground hover:text-foreground bg-transparent p-1 hover:bg-transparent"
    onclick={onPrevious}
  >
    <IconArrowLeft />
  </Button>
  <h1>
    {getI18n(`auth_register_steps_${name}`)}
  </h1>
  <div />
</header>
