<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { IconBrandInstagram, IconBrandTiktok, IconBrandTwitter } from "ui/icons";
  import { twMerge } from "tailwind-merge";

  export let classes = "";
</script>

<div class={twMerge("flex justify-center gap-4", classes)}>
  <Button
    size="icon"
    class="bg-transparent p-2 text-muted-foreground/75 transition-colors hover:bg-transparent hover:text-foreground"
  >
    <IconBrandInstagram />
  </Button>
  <Button
    size="icon"
    class="bg-transparent p-2 text-muted-foreground/75 transition-colors hover:bg-transparent hover:text-foreground"
  >
    <IconBrandTiktok />
  </Button>
  <Button
    size="icon"
    class="bg-transparent p-2 text-muted-foreground/75 transition-colors hover:bg-transparent hover:text-foreground"
  >
    <IconBrandTwitter />
  </Button>
</div>
