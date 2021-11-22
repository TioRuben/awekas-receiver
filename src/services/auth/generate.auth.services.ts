import crypto from "crypto";

import * as Environment from "../environment";

export const generateAuth = (user: string): string =>
  crypto
    .createHash("sha256")
    .update(`${user}${Environment.getEnvVar("HASH_SALT")}`)
    .digest("hex");
