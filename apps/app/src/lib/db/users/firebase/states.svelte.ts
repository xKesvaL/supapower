/* eslint-disable unicorn/no-null */
import type { UserProfile } from "../profile/types";

export class RegisterState {
  public goal: UserProfile["workout"]["type"] | null = $state(null);

  public experience: UserProfile["workout"]["experience"] | null = $state(null);

  public equipment: UserProfile["workout"]["equipment"] | null = $state(null);

  public frequencies: UserProfile["workout"]["frequencies"] = $state([]);
}
