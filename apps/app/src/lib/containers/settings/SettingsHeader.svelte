<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Loader } from "ui/components";
  import { IconArrowLeft } from "ui/icons";

  import * as m from "$paraglide/messages";

  interface Props {
    saveButton?: boolean;
    saveButtonEnabled?: boolean;
    loading?: boolean;
    title: string;
    onSave?: () => void;
  }

  let {
    saveButton = true,
    saveButtonEnabled = false,
    loading = false,
    title,
    onSave = () => {},
  } = $props<Props>();
</script>

<header class="page-header">
  <Button size="icon" class="text-foreground bg-transparent p-1 hover:bg-transparent">
    <IconArrowLeft />
  </Button>
  <span>
    {title}
  </span>
  <div>
    {#if saveButton}
      {#snippet defaultState()}
        {m.save()}
      {/snippet}
      <Button onclick={onSave} disabled={!saveButtonEnabled}>
        {#if loading}
          <Loader {defaultState} />
        {:else}
          {@render defaultState()}
        {/if}
      </Button>
    {/if}
  </div>
</header>
