<script>
  import { IconGraph, IconBarbell, IconMan, IconCalendarEvent } from "ui/icons";
</script>

<div class="mt-2 grid grid-cols-2 justify-center gap-2">
  <div
    class="shadow-primary fold:text-xs fold:min-h-[3rem] flex min-h-[3.5rem] items-center justify-center gap-2 rounded border p-1 text-sm shadow-sm"
  >
    <div class="fold:w-5 w-6">
      <IconGraph />
    </div>
    <div class="">
      <p>Statistics</p>
    </div>
  </div>
  <div
    class="shadow-primary fold:text-xs fold:min-h-[3rem] flex min-h-[3.5rem] items-center justify-center gap-2 rounded border p-1 text-sm shadow-sm"
  >
    <div class="fold:w-5 w-6">
      <IconBarbell />
    </div>
    <div class="">
      <p>Exercises</p>
    </div>
  </div>
  <div
    class="shadow-primary fold:text-xs fold:min-h-[3rem] flex min-h-[3.5rem] items-center justify-center gap-2 rounded border p-1 text-sm shadow-sm"
  >
    <div class="fold:w-5 w-6">
      <IconMan />
    </div>
    <div class="">
      <p>Measures</p>
    </div>
  </div>
  <div
    class="shadow-primary fold:text-xs fold:min-h-[3rem] flex min-h-[3.5rem] items-center justify-center gap-2 rounded border p-1 text-sm shadow-sm"
  >
    <div class="fold:w-5 w-6">
      <IconCalendarEvent />
    </div>
    <div class="">
      <p>Calendar</p>
    </div>
  </div>
</div>
