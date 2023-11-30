<script lang="ts" generics="T">
  import { Input } from "$lib/components/ui/input";
  import { getI18n } from "$lib/utils/functions";
  import { IconCheck } from "ui/icons";

  interface Props {
    title: string;
    options: readonly T[];
    selected: T | null;
  }

  let { options, title, selected = null } = $props<Props>();
</script>

<h2>
  {getI18n(title)}
</h2>

<div class="flex flex-col gap-4">
  {#each options as option}
    <button
      class="flex w-full flex-col gap-2 rounded-lg bg-card p-3"
      onclick={() => {
        selected = option;
        console.log(selected);
      }}
    >
      <div class="flex items-center gap-3">
        <div
          class="h-6 w-6 rounded-full bg-muted p-1 transition-all {selected === option
            ? 'bg-primary text-primary-foreground'
            : ''}"
        >
          <IconCheck />
        </div>
        <h3>
          {getI18n(`auth_register_${option}`)}
        </h3>
      </div>
      <div class="pl-8">coucou</div>
    </button>
  {/each}
</div>
