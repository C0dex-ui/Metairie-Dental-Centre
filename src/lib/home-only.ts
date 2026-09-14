import { redirect } from "@tanstack/react-router";

/** Homepage-first project: stray inner paths return to the Metairie homepage. */
export function toHome(hash: string = "top"): never {
  throw redirect({ to: "/", hash });
}
