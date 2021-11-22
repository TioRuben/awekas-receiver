import * as Environment from "../environment";
import { validateAuth } from "./validate.auth.services";

export const validateUserPassword = (user: string, password: string): boolean =>
  Environment.getEnvVar("ENABLED_USERS")
    .replace(/\s/g, "")
    .split(",")
    .some((validatedUser) => validatedUser === user) &&
  validateAuth(user, password);
