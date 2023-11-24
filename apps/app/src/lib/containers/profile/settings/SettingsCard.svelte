<script lang="ts">
    import { IconChevronRight } from "ui/icons";

    interface User {
        username: string;
    }

    export let user: User;
</script>

<div class="rounded flex bg-card border-border border-2 justify-between items-center">
    <div class="flex gap-10 items-center">
        <div class="border w-14 h-14 m-2 rounded">
            
        </div>
        <div class="text-2xl">
            <p>{user.username}</p>
        </div>
    </div>
    <div class="w-8 ">
        <IconChevronRight />
    </div>
</div>