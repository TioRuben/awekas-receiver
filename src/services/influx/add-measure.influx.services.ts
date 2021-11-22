import { Awekas } from "../../models";
import { connect } from "./connect.influx.services";
import { mapAwekasToPoint } from "./map-awekas-to-point.influx.services";
import { writeMeasure } from "./write-measure.influx.services";

export const addMeasure =
  (measure: Awekas.Awekas) =>
  (sensorId: string): Promise<void> => {
    const writeApi = connect();
    writeMeasure(writeApi)(mapAwekasToPoint(sensorId)(measure));
    return writeApi.close();
  };
