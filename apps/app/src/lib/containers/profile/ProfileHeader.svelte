<script lang="ts">
  import Profile from "$lib/containers/profile/Profile.svelte";

  let user = {
    username: "Jordan",
  };
</script>

<div class="mx-auto my-4 flex items-center gap-16">
  <img class="h-14 w-14 rounded-full border-2 border-gray-700" alt="" />
  <div class="text-2xl">
    <Profile {user} />
  </div>
</div>
