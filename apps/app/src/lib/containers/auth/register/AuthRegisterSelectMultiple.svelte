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
  <h2 class="text-center text-xl">
    {getI18n(`auth_register_${title}`)}
  </h2>
  <p class="text-muted-foreground -mt-6 text-center text-sm">
    {getI18n(`choose_up_to`, { max })}
  </p>

  <div class="flex flex-col gap-4">
    {#each options as option}
      <button
        class="bg-card flex w-full flex-col gap-2 rounded-lg border p-3 transition-all {selected.includes(
          option,
        )
          ? 'border-primary'
          : 'border-muted'}"
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
        <p class="text-muted-foreground/80 pl-9 text-left text-sm">
          {getI18n(`auth_register_${title}_${option}_description`)}
        </p>
      </button>
    {/each}
  </div>
</div>
