<script lang="ts">
  import { IconChevronRight } from "ui/icons";

  interface Props {
    children?: any;
    icon: any;
    href: string;
  }

  let { children, icon, href } = $props<Props>();
</script>

<a class="flex justify-between py-3" {href}>
  <div class="flex items-center gap-3">
    <div class="w-6">
      {@render icon()}
    </div>
    <div class="text-lg">
      {@render children()}
    </div>
  </div>
  <div class="text-muted-foreground w-8">
    <IconChevronRight />
  </div>
</a>
