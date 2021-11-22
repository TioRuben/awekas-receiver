export interface EnvironmentVars {
  PORT: number;
  NODE_ENV: string;
  INFLUX_URL: string;
  INFLUX_TOKEN: string;
  INFLUX_ORG: string;
  INFLUX_BUCKET: string;
  RATE_LIMIT_MAX_REQUESTS: number;
  RATE_LIMIT_WINDOW_MINUTES: number;
  RATE_LIMIT_DELAY_SECONDS: number;
  HASH_SALT: string;
  ENABLED_USERS: string;
}

export const defaults: EnvironmentVars = {
  PORT: 3000,
  NODE_ENV: "development",
  INFLUX_URL: "http://localhost:8086",
  INFLUX_TOKEN: "",
  INFLUX_ORG: "",
  INFLUX_BUCKET: "test",
  RATE_LIMIT_MAX_REQUESTS: 100,
  RATE_LIMIT_WINDOW_MINUTES: 1,
  RATE_LIMIT_DELAY_SECONDS: 2,
  HASH_SALT: "awekas",
  ENABLED_USERS: "TORRE01",
};
