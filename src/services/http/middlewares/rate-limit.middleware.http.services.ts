import { Handler } from "express";
import SlowDown from "express-slow-down";

import * as Environment from "../../environment";

interface RateLimitParamaters {
  rateLimitWindowMinutes?: number;
  rateLimitMaxRequests?: number;
  rateLimitDelaySeconds?: number;
}

export const rateLimitMiddleware = (
  parameters?: RateLimitParamaters
): Handler =>
  SlowDown({
    windowMs:
      (parameters?.rateLimitWindowMinutes ||
        Environment.getEnvVar("RATE_LIMIT_WINDOW_MINUTES")) *
      60 *
      1000,
    delayAfter:
      parameters?.rateLimitMaxRequests ||
      Environment.getEnvVar("RATE_LIMIT_MAX_REQUESTS"),
    delayMs:
      (parameters?.rateLimitDelaySeconds ||
        Environment.getEnvVar("RATE_LIMIT_DELAY_SECONDS")) * 1000,
  });
