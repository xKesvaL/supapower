<script>
    import { IconChevronRight, IconUser, IconCirclesRelation, IconBell } from "ui/icons";
</script>


<p class="text-sm mb-2 mx-2 font-light text-muted-foreground">Account</p>

<div class="px-2 rounded-lg bg-muted/75 grid grid-cols-1 divide-y divide-border/50">
    <div class="flex justify-between py-3">
        <div class="flex gap-2 items-center">
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
        <div class="flex gap-2 items-center">
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
        <div class="flex gap-2 items-center">
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