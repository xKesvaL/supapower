<script lang="ts">
  interface User {
    username: string;
  }

  type Props = {
    user: User;
  };

  let { user } = $props<Props>();
</script>

<div class="text-foreground fold:text-xs flex flex-col gap-1 text-sm">
  <div>
    <p>{user.username}</p>
  </div>
  <p>
    19, Fullstack Developer Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi libero
    suscipit animi ad adipisci perferendis cupiditate modi eligendi at ullam!. 🚗🏍️🎧♟️🎮
  </p>
</div>
