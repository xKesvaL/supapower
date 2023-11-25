<script lang="ts">
</script>

<section class="container flex min-h-screen flex-col items-center justify-center gap-2">
  <slot />
</section>

<style lang="scss">
  section {
    background: radial-gradient(circle at 76% 23%, hsl(var(--primary-300) / 0.05), transparent 40%),
      radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.1), transparent 40%),
      radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.1), transparent 40%),
      radial-gradient(circle at 28% 90%, hsl(var(--secondary-300) / 0.05), transparent 40%);
  }
</style>
