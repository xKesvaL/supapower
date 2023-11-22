<script lang="ts">
  interface User {
    username: string;
  }

  export let user: User;
</script>

<p>{user.username}</p>
