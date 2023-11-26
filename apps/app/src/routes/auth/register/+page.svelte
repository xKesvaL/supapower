<script lang="ts">
  import AuthRegister from "$lib/containers/auth/AuthRegister.svelte";
  import AuthRegisterDiscover from "$lib/containers/auth/register/AuthRegisterDiscover.svelte";
  import AuthRegisterGoal from "$lib/containers/auth/register/AuthRegisterGoal.svelte";
  import AuthRegisterHeader from "$lib/containers/auth/register/AuthRegisterHeader.svelte";
  import AuthRegisterExperience from "$lib/containers/auth/register/AuthRegisterExperience.svelte";
  import AuthRegisterEquipment from "$lib/containers/auth/register/AuthRegisterEquipment.svelte";
  import AuthRegisterFrequency from "$lib/containers/auth/register/AuthRegisterFrequency.svelte";
  import AuthRegisterComplete from "$lib/containers/auth/register/AuthRegisterComplete.svelte";
  import { HorizontalSteps } from "ui/components";
  import { transition } from "$lib/utils/functions";

  const registerStages = [
    "discover",
    "goal",
    "experience",
    "equipment",
    "frequency",
    "complete",
  ] as const;

  type RegisterStage = (typeof registerStages)[number];

  let currentState = $state<RegisterStage>("discover");

  const onNext = () => {
    const currentIndex = registerStages.indexOf(currentState);
    if (currentIndex < registerStages.length - 1) {
      transition(async () => {
        currentState = registerStages[currentIndex + 1] ?? "complete";
      });
    }
  };

  const onPrevious = () => {
    const currentIndex = registerStages.indexOf(currentState);
    if (currentIndex > 0) {
      transition(async () => {
        currentState = registerStages[currentIndex - 1] ?? "discover";
      });
    }
  };
</script>

<div class="flex w-full flex-1 flex-col gap-2">
  {#if currentState !== "discover"}
    <AuthRegisterHeader {onPrevious} name={currentState} />
  {/if}

  <section class="container flex h-full w-full flex-1 flex-col pt-0">
    {#if currentState !== "discover"}
      <HorizontalSteps steps={registerStages} activeStep={registerStages.indexOf(currentState)} />
    {/if}

    {#if currentState === "discover"}
      <AuthRegisterDiscover {onNext} />
    {:else if currentState === "goal"}
      <AuthRegisterGoal {onNext} />
    {:else if currentState === "experience"}
      <AuthRegisterExperience {onNext} />
    {:else if currentState === "equipment"}
      <AuthRegisterEquipment {onNext} />
    {:else if currentState === "frequency"}
      <AuthRegisterFrequency {onNext} />
    {:else if currentState === "complete"}
      <AuthRegisterComplete {onNext} />
    {/if}
  </section>
</div>
