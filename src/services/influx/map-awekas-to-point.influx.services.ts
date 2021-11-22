import { Point } from "@influxdata/influxdb-client";

import { Awekas } from "../../models";

export const mapAwekasToPoint =
  (sensorId: string) =>
  (awekas: Awekas.Awekas): Point[] =>
    Object.keys(awekas).map((key) =>
      new Point(key)
        .tag("station", sensorId)
        .floatField("value", awekas[key as keyof Awekas.Awekas] as number)
    );
