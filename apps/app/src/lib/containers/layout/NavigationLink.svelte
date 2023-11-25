<script lang="ts">
  import { page } from "$app/stores";

  interface Props {
    href: string;
    children?: any;
    icon: any;
    active: boolean;
  }

  let { href, children, icon, active } = $props<Props>();
</script>

<a
  class="relative flex h-full flex-grow items-center justify-center lg:h-auto lg:w-full lg:flex-grow-0 lg:justify-start lg:gap-4 lg:p-6 {active
    ? 'active before:bg-primary before:absolute before:left-0 before:right-0 before:top-0 before:h-0.5 before:w-full lg:before:bottom-0 lg:before:left-auto lg:before:h-full lg:before:w-0.5'
    : ''}"
  {href}
>
  <div class="h-6 w-6 flex-shrink-0">
    {@render icon()}
  </div>
  <span class="sr-only lg:not-sr-only">
    {@render children()}
  </span>
</a>

<style lang="scss">
  a {
    :global(svg) {
      transition: 0.2s ease;
    }

    &.active {
      color: hsl(var(--primary-700));

      :global(svg) {
        fill: hsl(var(--primary-700));
      }

      &::before {
        view-transition-name: navigation-active;
      }
    }
  }
</style>
