<script>
  import { IconGraph, IconBarbell, IconMan, IconCalendarEvent  } from "ui/icons";
</script>

<div class="mt-4 grid grid-cols-2 gap-2 justify-center">
  <div class="flex gap-2 flex text-sm items-center border rounded p-1 shadow-sm shadow-primary">
    <div class="w-6">
        <IconGraph />
    </div>
    <div class="w-full text-center">
      <p>Statistics</p>
    </div>
  </div>
  <div class="flex gap-2 flex text-sm items-center border rounded p-1 shadow-sm shadow-primary">
    <div class="w-6">
        <IconBarbell />
    </div>
    <div class="w-full text-center">
      <p>Exercises</p>
    </div>
  </div>
  <div class="flex gap-2 flex text-sm items-center border rounded p-1 shadow-sm shadow-primary">
    <div class="w-6">
        <IconMan />
    </div>
    <div class="w-full text-center">
      <p>Measures</p>
    </div>
  </div>
  <div class="flex gap-2 flex text-sm items-center border rounded p-1 shadow-sm shadow-primary">
    <div class="w-6">
        <IconCalendarEvent />
    </div>
    <div class="w-full text-center">
      <p>Calendar</p>
    </div>
  </div>
</div>