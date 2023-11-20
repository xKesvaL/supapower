<script>
  import { t } from "svelte-i18n";

  import Socials from "$lib/components/base/Socials.svelte";
  import { BRAND } from "$lib/CONFIG";
</script>

<div
  class="container relative z-0 flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground/75 after:absolute after:left-12 after:right-12 after:top-0 after:h-[1px] after:bg-border/40 lg:flex-row"
>
  <div>
    Copyright © {BRAND.startDate.getFullYear()}
    {BRAND.name}. {$t("common.allRightsReserved")}
  </div>
  <Socials />
</div>
