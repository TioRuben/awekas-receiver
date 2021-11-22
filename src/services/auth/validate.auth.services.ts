import { generateAuth } from "./generate.auth.services";

export const validateAuth = (user: string, password: string): boolean =>
  generateAuth(user) === password;
