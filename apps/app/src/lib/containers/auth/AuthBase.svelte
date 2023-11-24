<script lang="ts">
  import { CardGlass } from "ui/components";

  let { children } = $props<any>();
</script>

<CardGlass class="w-full max-w-sm">
  {@render children()}
</CardGlass>
