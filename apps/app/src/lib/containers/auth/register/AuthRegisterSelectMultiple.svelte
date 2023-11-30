<script lang="ts" generics="T">
  import { getI18n } from "$lib/utils/functions";

  interface Props {
    title: string;
    options: readonly T[];
    selected: T[];
  }

  let { options, title, selected = [] } = $props<Props>();
</script>

<h2>
  {getI18n(title)}
</h2>

<div>
  {#each options as option}
    <button
      onclick={() => {
        if (selected.includes(option)) {
          selected = selected.filter((item) => item !== option);
        } else {
          selected = [...selected, option];
        }
        console.log(selected);
      }}
    >
      <h3>
        {getI18n(`auth_register_${option}`)}
      </h3>
    </button>
  {/each}
</div>
