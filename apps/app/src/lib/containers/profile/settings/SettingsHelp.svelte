<script>
  import {
    IconChevronRight,
    IconQuestionMark,
    IconPhone,
    IconGavel,
    IconInfoCircle,
    IconLogout,
  } from "ui/icons";
</script>

<div class="flex flex-col gap-1">
  <p class="text-sm font-light text-muted-foreground">Help</p>

  <div class="grid grid-cols-1 divide-y divide-border/50 rounded-lg bg-muted/75 px-4">
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconQuestionMark />
        </div>
        <div class="text-lg">
          <p>FAQ</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconPhone />
        </div>
        <div class="text-lg">
          <p>Contact</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconGavel />
        </div>
        <div class="text-lg">
          <p>Legal</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconInfoCircle />
        </div>
        <div class="text-lg">
          <p>App infos</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
    <div class="flex justify-between py-3">
      <div class="flex items-center gap-3">
        <div class="w-6">
          <IconLogout />
        </div>
        <div class="text-lg">
          <p>Logout</p>
        </div>
      </div>
      <div class="w-8 text-muted-foreground">
        <IconChevronRight />
      </div>
    </div>
  </div>
</div>
