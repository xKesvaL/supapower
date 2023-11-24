<script>
  import { IconChevronRight, IconBarbell, IconRuler2, IconLanguage, IconMoon } from "ui/icons";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Preferences</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconBarbell />
        </div>
        <div class="text-lg">
          <p>Workouts</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconRuler2 />
        </div>
        <div class="text-lg">
          <p>Units</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconLanguage />
        </div>
        <div class="text-lg">
          <p>Language</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconMoon />
        </div>
        <div class="text-lg">
          <p>Theme</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
  </div>
</div>
