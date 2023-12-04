<script lang="ts">
  import AuthRegisterDiscover from "$lib/containers/auth/register/AuthRegisterDiscover.svelte";
  import AuthRegisterGoal from "$lib/containers/auth/register/AuthRegisterGoal.svelte";
  import AuthRegisterHeader from "$lib/containers/auth/register/AuthRegisterHeader.svelte";
  import AuthRegisterExperience from "$lib/containers/auth/register/AuthRegisterExperience.svelte";
  import AuthRegisterEquipment from "$lib/containers/auth/register/AuthRegisterEquipment.svelte";
  import AuthRegisterFrequency from "$lib/containers/auth/register/AuthRegisterFrequency.svelte";
  import AuthRegisterComplete from "$lib/containers/auth/register/AuthRegisterComplete.svelte";
  import { HorizontalSteps } from "ui/components";
  import { formatZodError, gotoFrel, transition } from "$lib/utils/functions";
  import { RegisterState } from "$lib/db/users/firebase/states.svelte";
  import type { FormattedZodError } from "$lib/typings/standard";
  import type { AuthError } from "$lib/db/users/firebase/types";
  import type { AuthProvider } from "$lib/utils/firebase";
  import { UserFirebaseSchema } from "$lib/db/users/firebase/schemas";
  import { page } from "$app/stores";
  import { authRegisterWithEmailAndPassword } from "$lib/db/users/firebase/actions";
  import { createUserProfile } from "$lib/db/users/profile/actions";

  const registerState = new RegisterState();

  const registerStages = [
    "discover",
    "goal",
    "experience",
    "equipment",
    "frequency",
    "complete",
  ] as const;

  $inspect(registerState);

  type RegisterStage = (typeof registerStages)[number];

  let currentState = $state<RegisterStage>("discover");

  let credentials = $state({
    email: "",
    password: "",
  });

  let username = $state("");

  let authState = $state<{
    loading: boolean;
    authError: AuthError | null;
    fieldErrors: FormattedZodError;
  }>({
    loading: false,
    authError: null,
    fieldErrors: {},
  });

  const onNext = () => {
    const currentIndex = registerStages.indexOf(currentState);
    if (currentIndex < registerStages.length - 1) {
      transition(async () => {
        currentState = registerStages[currentIndex + 1] ?? "complete";
        window.location.hash = `#${currentState}`;
        window.scrollTo(0, 0);
      });
    }
  };

  const onPrevious = () => {
    const currentIndex = registerStages.indexOf(currentState);
    if (currentIndex > 0) {
      transition(async () => {
        currentState = registerStages[currentIndex - 1] ?? "discover";
        window.location.hash = `#${currentState}`;
        window.scrollTo(0, 0);
      });
    }
  };

  const onHashChange = (e: HashChangeEvent) => {
    const hash = (e.newURL.split("#")[1] as RegisterStage) ?? "discover";
    transition(async () => {
      currentState = hash;
    });
  };

  const onFinish = async (type: AuthProvider) => {
    if (type === "credentials") {
      authState.loading = true;
      authState.fieldErrors = {};

      const schemaRes = UserFirebaseSchema.safeParse(credentials);

      if (!schemaRes.success) {
        authState.fieldErrors = formatZodError(schemaRes.error);
        authState.loading = false;
        return;
      }

      const authRes = await authRegisterWithEmailAndPassword(
        schemaRes.data.email,
        schemaRes.data.password,
      );

      if (authRes.error || !authRes.user) {
        authState.authError = authRes.error ?? null;
        console.error(authRes.error);
      } else {
        await createUserProfile(authRes.user, registerState, username.toLowerCase());

        await gotoFrel($page);
      }

      authState.loading = false;
    }
  };
</script>

<svelte:window onhashchange={onHashChange} />

<div class="flex w-full flex-1 flex-col gap-2">
  {#if currentState !== "discover"}
    <AuthRegisterHeader {onPrevious} name={currentState} />
  {/if}

  <section class="container flex h-full w-full flex-1 flex-col pt-0">
    {#if currentState !== "discover"}
      <HorizontalSteps steps={registerStages} activeStep={registerStages.indexOf(currentState)} />
    {/if}

    <div class="flex w-full flex-1 flex-col gap-2 pt-4">
      {#if currentState === "discover"}
        <AuthRegisterDiscover {onNext} />
      {:else if currentState === "goal"}
        <AuthRegisterGoal bind:goal={registerState.goal} {onNext} />
      {:else if currentState === "experience"}
        <AuthRegisterExperience bind:experience={registerState.experience} {onNext} />
      {:else if currentState === "equipment"}
        <AuthRegisterEquipment bind:equipment={registerState.equipment} {onNext} />
      {:else if currentState === "frequency"}
        <AuthRegisterFrequency bind:frequencies={registerState.frequencies} {onNext} />
      {:else if currentState === "complete"}
        <AuthRegisterComplete {onFinish} bind:authState bind:credentials bind:username />
      {/if}
    </div>
  </section>
</div>
