<script lang="ts">
    import { IconChevronRight } from "ui/icons";

    interface User {
        username: string;
        email: string;
        date: string;
    }

    export let user: User;
</script>

<div class="p-2 rounded-lg flex bg-muted/75 justify-between items-center">
    <div class="flex gap-10 items-center">
        <div class="border w-14 h-14 m-2 rounded">
            <!--Image ?-->
        </div>
        <div>
            <p class="text-2xl">{user.username}</p>
            <p class="text-sm">{user.email}</p>
            <p class="text-sm">Member since {user.date}</p>
        </div>
    </div>
    <div class="w-8 text-muted-foreground">
        <IconChevronRight />
    </div>
</div>