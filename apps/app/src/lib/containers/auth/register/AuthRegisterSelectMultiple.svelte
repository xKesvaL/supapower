<script lang="ts" generics="T">
  import { IconCheck } from "ui/icons";

  import { getI18n } from "$lib/utils/functions";

  interface Props {
    title: string;
    options: readonly T[];
    selected: T[];
    max?: number;
  }

  let { options, title, selected = [], max = 3 } = $props<Props>();
</script>

<div class="mt-4 flex flex-col gap-8" style="view-transition-name: register-flow-select">
  <h2>
    {getI18n(`auth_register_${title}`)}
  </h2>

  <div class="flex flex-col gap-4">
    {#each options as option}
      <button
        class="bg-card flex w-full flex-col gap-2 rounded p-3"
        onclick={() => {
          if (selected.includes(option)) {
            selected = selected.filter((item) => item !== option);
          } else if (selected.length < max) {
            selected = [...selected, option];
          }
          console.log(selected);
        }}
      >
        <div class="flex items-center gap-3">
          <div
            class="bg-muted h-6 w-6 rounded-lg p-1 transition-all {selected.includes(option)
              ? 'bg-primary text-primary-foreground'
              : ''}"
          >
            <IconCheck />
          </div>
          <h3>
            {getI18n(`auth_register_${title}_${option}`)}
          </h3>
        </div>
        <div class="pl-9">
          {getI18n(`auth_register_${title}_${option}_description`)}
        </div>
      </button>
    {/each}
  </div>
</div>
