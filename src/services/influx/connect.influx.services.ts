import { InfluxDB, WriteApi } from "@influxdata/influxdb-client";

import * as Environment from "../environment";

export const connect = (): WriteApi =>
  new InfluxDB({
    url: Environment.getEnvVar("INFLUX_URL"),
    token: Environment.getEnvVar("INFLUX_TOKEN"),
  }).getWriteApi(
    Environment.getEnvVar("INFLUX_ORG"),
    Environment.getEnvVar("INFLUX_BUCKET")
  );
