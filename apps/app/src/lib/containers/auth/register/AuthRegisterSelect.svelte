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

<div class="mt-4 flex flex-col gap-8 pb-12" style="view-transition-name: register-flow-select">
  <h2 class="text-center text-xl">
    {getI18n(`auth_register_${title}`)}
  </h2>

  <div class="flex flex-col gap-4">
    {#each options as option}
      <button
        class="bg-card flex w-full flex-col gap-2 rounded-lg border p-3 transition-all {selected ===
        option
          ? 'border-primary'
          : 'border-n'}"
        onclick={() => {
          selected = option;
        }}
      >
        <div class="flex items-center gap-3">
          <div
            class="bg-muted h-6 w-6 rounded-full p-1 transition-all {selected === option
              ? 'bg-primary text-primary-foreground'
              : ''}"
          >
            <IconCheck />
          </div>
          <h3>
            {getI18n(`auth_register_${title}_${option}`)}
          </h3>
        </div>
        <p class="text-muted-foreground/80 pl-9 text-left text-sm">
          {getI18n(`auth_register_${title}_${option}_description`)}
        </p>
      </button>
    {/each}
  </div>
</div>
