<script lang="ts">
  import { IconChevronRight } from "ui/icons";

  interface User {
    username: string;
    email: string;
    date: string;
  }

  export let user: User;
</script>

<div class="flex items-center justify-between rounded-lg bg-muted/75 p-4">
  <div class="flex items-center gap-4">
    <div class="h-16 w-16 rounded border">
      <!--Image ?-->
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-lg leading-none">{user.username}</p>
      <p class="text-sm">{user.email}</p>
      <p class="text-xs text-muted-foreground">Member since {user.date}</p>
    </div>
  </div>
  <div class="w-8 text-muted-foreground">
    <IconChevronRight />
  </div>
</div>
