import type { Page } from "@sveltejs/kit";
import type { ZodError } from "zod";

import { goto } from "$app/navigation";
import { PAGES } from "$lib/ROUTES";
import type { FormattedZodError } from "$lib/typings/standard";
import { browser } from "$app/environment";

export const formatZodError = (error: ZodError): FormattedZodError =>
  error.errors.reduce<FormattedZodError>((accumulator, current) => {
    if (current.path.length === 0 || current.path[0] === undefined) {
      return accumulator;
    }

    accumulator[current.path[0]] = {
      message: current.message,
    };

    return accumulator;
  }, {});

export const gotoFrel = async (page: Page<{ [key: string]: string }>) => {
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unsafe-argument
  await goto(page.data.frel ?? PAGES._ROOT());
};

export const goBack = (event: MouseEvent) => {
  event.preventDefault();

  if (browser) {
    window.history.back();
  }
};
