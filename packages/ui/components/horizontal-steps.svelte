<script lang="ts">
  interface Props {
    steps: readonly string[];
    activeStep: number;
    viewTransitionName?: string;
  }

  let { steps, activeStep, viewTransitionName = "steps" } = $props<Props>();
</script>

<div class="steps" style="view-transition-name: {viewTransitionName}">
  {#each steps as _step, i}
    <div class="step" class:active={i < activeStep}></div>
  {/each}
</div>

<style lang="scss">
  .steps {
    display: flex;
    width: 100%;
    height: 4px;
    gap: 4px;

    .step {
      flex: 1;
      height: 100%;
      background: hsl(var(--muted));

      &.active {
        background: hsl(var(--primary));
      }
    }
  }
</style>
