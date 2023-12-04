<script lang="ts">
  import type { ZxcvbnResult } from "@zxcvbn-ts/core";

  type Props = {
    passwordStrength: ZxcvbnResult;
  };

  let { passwordStrength } = $props<Props>();
</script>

<div class="ml-auto mt-1 flex h-1 gap-2">
  <div
    class="h-full w-12 rounded-full transition-colors {passwordStrength.score >= 1
      ? 'bg-input/75'
      : 'bg-muted'}"
  ></div>
  <div
    class="h-full w-12 rounded-full transition-colors {passwordStrength.score >= 2
      ? 'bg-destructive'
      : 'bg-muted'}"
  ></div>
  <div
    class="h-full w-12 rounded-full transition-colors {passwordStrength.score >= 3
      ? 'bg-[#fbbf28]'
      : 'bg-muted'}"
  ></div>
  <div
    class="h-full w-12 rounded-full transition-colors {passwordStrength.score >= 4
      ? 'bg-success'
      : 'bg-muted'}"
  ></div>
</div>
