<script lang="ts">
  import { CardGlass } from "ui/components";
  import { twMerge } from "tailwind-merge";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    class?: string;
  }

  let { children, class: classes = "" } = $props<Props>();
</script>

<CardGlass
  scale={1}
  class="shadow-out-2xl w-full max-w-sm"
  style="--sdw-out: hsl(var(--primary) / 0.1)"
  classBg={twMerge("flex flex-col items-center gap-8 p-6", classes)}
  strength={0.05}
>
  {@render children()}
</CardGlass>
