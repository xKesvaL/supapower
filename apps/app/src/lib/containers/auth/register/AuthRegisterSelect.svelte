<script lang="ts" generics="T">
  import { getI18n } from "$lib/utils/functions";

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

<div>
  {#each options as option}
    <button
      onclick={() => {
        selected = option;
        console.log(selected);
      }}
    >
      <h3>
        {getI18n(`auth_register_${option}`)}
      </h3>
    </button>
  {/each}
</div>
