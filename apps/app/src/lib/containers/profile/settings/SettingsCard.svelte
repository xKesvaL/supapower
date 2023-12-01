<script lang="ts">
  import { PAGES } from "$lib/ROUTES";
  import { IconChevronRight } from "ui/icons";

  interface User {
    username: string;
    email: string;
    date: string;
  }

  type Props = {
    user: User;
  };

  let { user } = $props<Props>();
</script>

<a
  class="bg-muted/75 flex items-center justify-between rounded-lg p-4"
  href={PAGES.profile_settings_account()}
>
  <div class="flex items-center gap-4">
    <div class="h-16 w-16 rounded border">
      <!--Image ?-->
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-lg leading-none">{user.username}</p>
      <p class="text-sm">{user.email}</p>
      <p class="text-muted-foreground text-xs">Member since {user.date}</p>
    </div>
  </div>
  <div class="text-muted-foreground w-8">
    <IconChevronRight />
  </div>
</a>
