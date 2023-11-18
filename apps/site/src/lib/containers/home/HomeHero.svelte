<script>
  import { Button } from '$lib/components/ui/button';
</script>

<section class="container grid items-center gap-8 lg:grid-cols-2">
  <div class="flex flex-col gap-4">
    <span class="font-title text-xs uppercase text-muted-foreground/80 lg:text-sm">
      Train harder, smarter. Get stronger, faster.
    </span>
    <h1 class="text flex flex-col gap-2 text-4xl sm:text-5xl lg:text-6xl">
      A fully featured
      <div>free fitness app</div>
      for everyone.
    </h1>
    <p class="mt-2 text-muted-foreground/80 lg:mt-4 lg:max-w-[40ch] lg:text-lg">
      Track your workouts, set goals, and get better every session. Less thinking, more lifting, all
      for free.
    </p>
    <div class="mt-2 flex gap-2 lg:mt-4">
      <Button variant="secondary">Join us now</Button>
      <Button variant="outline" class="hover:border-accent ">Why use us?</Button>
    </div>
  </div>
  <div>
    <enhanced:img src="$assets/home/hero.png" alt="" />
  </div>
</section>

<style lang="scss">
  section {
    min-height: 70vh;
    h1 div {
      user-select: none;
      background: hsl(var(--primary));
      background-clip: text;
      background-image: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)));

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
</style>
