<script lang="ts">
  import { PAGES } from "$lib/ROUTES";
  import { Button } from "$lib/components/ui/button";
  import AuthBase from "./AuthBase.svelte";
  import { page } from "$app/stores";

  import * as m from "$paraglide/messages";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "$lib/utils/firebase";
  import { gotoFrel } from "$lib/utils/functions";

  const register = async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    await createUserWithEmailAndPassword(
      auth,
      formData.get("email") as string,
      formData.get("password") as string,
    );

    await gotoFrel($page);
  };
</script>

<AuthBase>
  THIS IS TO BE REPLACED WITH THE REGISTER FLOW
  <br />
  see <a href="https://github.com/xKesvaL/leetstrength/issues/13">this issue</a>
  <br />
  this is only here to make the app work for now
  <form onsubmit={register}>
    <span> email </span>
    <input class="border" type="email" name="email" />
    <span> password </span>
    <input class="border" type="password" name="password" />
    <button> register </button>
  </form>
</AuthBase>

<Button
  variant="link"
  class="text-muted-foreground underline"
  href={PAGES.auth_login({ frel: $page.data.frel })}
>
  {m.auth_switch_to_login()}
</Button>
