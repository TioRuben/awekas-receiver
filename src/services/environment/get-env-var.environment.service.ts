import { defaults, EnvironmentVars } from "./model.environment.services";

export const getEnvVar = <T extends keyof EnvironmentVars>(
  environmentVar: T
): EnvironmentVars[T] =>
  (Object.keys(defaults).some((key) => key === environmentVar) &&
    // Prevented with ⤴ that function
    // eslint-disable-next-line security/detect-object-injection
    (process.env[environmentVar] as EnvironmentVars[T])) ||
  // eslint-disable-next-line security/detect-object-injection
  defaults[environmentVar];
