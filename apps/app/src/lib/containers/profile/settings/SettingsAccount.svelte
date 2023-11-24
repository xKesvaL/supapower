<script>
  import { IconChevronRight, IconUser, IconCirclesRelation, IconBell } from "ui/icons";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Account</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconUser />
        </div>
        <div class="text-lg">
          <p>Profile</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconCirclesRelation />
        </div>
        <div class="text-lg">
          <p>Connections</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconBell />
        </div>
        <div class="text-lg">
          <p>Notifications</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
  </div>
</div>
