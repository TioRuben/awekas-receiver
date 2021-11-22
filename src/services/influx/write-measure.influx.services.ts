import { Point, WriteApi } from "@influxdata/influxdb-client";

export const writeMeasure = (writeApi: WriteApi) => (points: Point[]) =>
  writeApi.writePoints(points);
