<script>
    import { IconChevronRight, IconUser, IconCirclesRelation, IconBell } from "ui/icons";
</script>


<h2 class="text-lg mt-4">Accounts</h2>

<div class="px-2 border-border border rounded bg-card grid grid-cols-1 divide-y">
    <div class="flex justify-between py-2">
        <div class="flex gap-2 items-center">
            <div class="w-8">
                <IconUser />
            </div>
            <div class="text-xl">
                <p>Profile</p>
            </div>
        </div>
        <div class="w-8">
            <IconChevronRight />
        </div>
    </div>
    <div class="flex justify-between py-2">
        <div class="flex gap-2 items-center">
            <div class="w-8">
                <IconCirclesRelation />
            </div>
            <div class="text-xl">
                <p>Connections</p>
            </div>
        </div>
        <div class="w-8">
            <IconChevronRight />
        </div>
    </div>
    <div class="flex justify-between py-2">
        <div class="flex gap-2 items-center">
            <div class="w-8">
                <IconBell />
            </div>
            <div class="text-xl">
                <p>Notifications</p>
            </div>
        </div>
        <div class="w-8">
            <IconChevronRight />
        </div>
    </div>
</div>