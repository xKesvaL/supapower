<script>
    import { IconChevronRight, IconBarbell, IconRuler2, IconLanguage, IconMoon } from "ui/icons";
</script>


<p class="text-sm mb-2 mx-2 font-light text-muted-foreground">Preferences</p>

<div class="px-2 rounded-lg bg-muted/75 grid grid-cols-1 divide-y divide-border/50">
    <div class="flex justify-between py-3">
        <div class="flex gap-2 items-center">
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
        <div class="flex gap-2 items-center">
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
        <div class="flex gap-2 items-center">
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
        <div class="flex gap-2 items-center">
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