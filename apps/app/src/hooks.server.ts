/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/prefer-destructuring */
import type { Handle } from "@sveltejs/kit";

import { dev } from "$app/environment";
import { DEFAULT_LOCALE } from "$lib/CONFIG";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.uid = event.cookies.get("uid") ?? crypto.randomUUID();

  const overwriteLang = event.url.searchParams.get("owlang");
  const { lang: langParameter } = event.params;

  let lang: string = DEFAULT_LOCALE;
  lang =
    overwriteLang !== null && langParameter !== undefined
      ? langParameter
      : event.cookies.get("lang") ??
        langParameter ??
        event.request.headers.get("accept-language")?.split(",")[0]?.split("-")[0] ??
        DEFAULT_LOCALE;

  event.locals.lang = lang;

  if (event.cookies.get("uid") === undefined && !dev) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    // if this is the first time the user has visited this app,
    // set a cookie so that we recognize them when they return
    event.cookies.set("uid", event.locals.uid, {
      expires,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      httpOnly: true,
      path: "/",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      secure: true,
    });
  }

  return await resolve(event);
};
