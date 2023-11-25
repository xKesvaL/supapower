<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  interface Props {
    color?: string;
    href?: string | null;
    class?: string;
    classBg?: string;
    style?: string;
    styleBg?: string;
    scale?: number;
    defaultBorder?: boolean;
    strength?: number;
  }

  let {
    color = "primary",
    href = null,
    class: classes = "",
    classBg = "",
    style = "",
    styleBg = "",
    scale = 1.02,
    defaultBorder = true,
    strength = 0.15,
  } = $props<Props>();

  let el = $state<HTMLElement>();

  $effect(() => {
    if (el) {
      el.style.setProperty("--drop-color", `var(--${color})`);
    }
  });

  const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
    const target = ev.currentTarget;

    const rect = target.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    target.style.setProperty("--drop-x", `${x}px`);
    target.style.setProperty("--drop-y", `${y}px`);
  };
</script>

<svelte:element
  this={href ? "a" : "div"}
  bind:this={el}
  {href}
  class="card {classes}"
  class:border={defaultBorder}
  role={href ? "link" : "none"}
  onmousemove={onHover}
  style="--cg-sc: {scale}; --cg-st: {strength}; {style}"
>
  <div class="card-bg-img {classBg}" style={styleBg}>
    <slot />
  </div>
</svelte:element>

<style lang="scss">
  .card {
    --drop-x: 0;
    --drop-y: 0;

    --drop-color: var(--primary);

    background: hsl(var(--card) / 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0.75rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;

    &.border {
      border-color: hsl(var(--foreground) / 0.3);

      &:hover {
        border-color: hsl(var(--foreground) / 0.6);
      }
    }

    &:hover {
      transform: scale(var(--cg-sc));
    }

    &-bg-img {
      height: 100%;
      width: 100%;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: rgba(var(--base-200-rgb), 0.3);
        background-image: radial-gradient(
          circle at var(--drop-x) var(--drop-y),
          hsl(var(--drop-color) / var(--cg-st)),
          transparent
        );
      }
    }
  }
</style>
